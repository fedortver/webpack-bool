const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const utils = require('./utils');
const baseConfig = require('./webpack.base.config')

module.exports = {
    devServer: {
        stats: "errors-only",
        host: process.env.HOST,
        port: process.env.PORT
    },
    plugins: [
        new webpack.WatchIgnorePlugin([
            path.join(__dirname, 'node_modules'),
        ])
    ],
    module: {
        rules: utils.styleLoaders({ sourceMap: false })
    }
}