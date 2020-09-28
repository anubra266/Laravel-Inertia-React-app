const mix = require("laravel-mix");
const path = require("path");
const fs = require("fs");

const { getLessVars } = require('antd-theme-generator');

const AntDesignThemePlugin = require("antd-theme-webpack-plugin");

const themeVariables = getLessVars(path.join(__dirname, './resources/less/variables.less'))
const defaultVars = getLessVars('./node_modules/antd/lib/style/themes/default.less')
const darkVars = { ...getLessVars('./node_modules/antd/lib/style/themes/dark.less'), '@primary-color': defaultVars['@primary-color'] };
const lightVars = { ...getLessVars('./node_modules/antd/lib/style/themes/compact.less'), '@primary-color': defaultVars['@primary-color'] };
fs.writeFileSync('./resources/js/AntD/dark.json', JSON.stringify(darkVars));
fs.writeFileSync('./resources/js/AntD/light.json', JSON.stringify(lightVars));
fs.writeFileSync('./resources/js/AntD/theme.json', JSON.stringify(themeVariables));

const options = {
    antDir: path.join(__dirname, "./node_modules/antd"),
    stylesDir: path.join(__dirname, "./resources/less"),
    varFile: path.join(__dirname, "./resources/less/variables.less"),
    themeVariables: Array.from(new Set([
    ...Object.keys(darkVars),
    ...Object.keys(lightVars),
    ...Object.keys(themeVariables),
  ]))
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
