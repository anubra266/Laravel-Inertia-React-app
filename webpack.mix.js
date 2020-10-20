const mix = require("laravel-mix");
const path = require("path");
const fs = require("fs");

const { getLessVars } = require("antd-theme-generator");

const AntDesignThemePlugin = require("antd-theme-webpack-plugin");

const customTheme = "./resources/less/variables.less";
const darkTheme = "./node_modules/antd/lib/style/themes/dark.less";
const lightTheme = "./node_modules/antd/lib/style/themes/compact.less";

const themeVars = getLessVars(path.join(__dirname, customTheme));
const darkVars = {
    ...getLessVars(darkTheme)
};
const lightVars = {
    ...getLessVars(lightTheme)
};
fs.writeFileSync("./resources/js/AntD/dark.json", JSON.stringify(darkVars));
fs.writeFileSync("./resources/js/AntD/light.json", JSON.stringify(lightVars));
fs.writeFileSync("./resources/js/AntD/theme.json", JSON.stringify(themeVars));

const options = {
    antDir: path.join(__dirname, "./node_modules/antd"),
    stylesDir: path.join(__dirname, "./resources/less"),
    //? Call    default     theme   here ⤵️
    varFile: path.join(__dirname, customTheme),
    themeVariables: Array.from(
        new Set([
            ...Object.keys(darkVars),
            ...Object.keys(lightVars),
            ...Object.keys(themeVars)
        ])
    )
};

const themePlugin = new AntDesignThemePlugin(options);

mix.react("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .webpackConfig({
        plugins: [themePlugin],
        output: { chunkFilename: "js/[name].js?id=[chunkhash]" },
        resolve: {
            alias: {
                //* for @ imports
                "@": path.resolve("resources/js")
            }
        },
        module: {
            rules: [
                {
                    test: /\.(?:le|c)ss$/,
                    use: [
                        {
                            loader: require.resolve("less-loader"),
                            options: {
                                lessOptions: {
                                    javascriptEnabled: true
                                }
                            }
                        }
                    ]
                }
            ]
        }
    })
    //* version the bundles
    .version()
    // .browserSync("localhost:8000")
    .disableNotifications();
