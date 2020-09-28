const mix = require("laravel-mix");
const path = require("path");
// const { getThemeVariables } = require("antd/dist/theme");

const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const options = {
    antDir: path.join(__dirname, "./node_modules/antd"),
    stylesDir: path.join(__dirname, "./resources/less"),
    varFile: path.join(__dirname, "./resources/less/variables.less"),
    themeVariables: ["@primary-color"]
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
        }
    })
    //* version the bundles
    .version()
    // .browserSync("localhost:8000")
    .disableNotifications();
