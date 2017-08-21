const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const utils = require('./utils');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {

    module: {
        rules: utils.styleLoaders({
            sourceMap: true,
            extract: true
        })
    },
    devtool: '#source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/style.css'
        }),
    ]

})