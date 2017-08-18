const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: path.join(__dirname, '..', 'src'),
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack demo"
        }),
    ]
}