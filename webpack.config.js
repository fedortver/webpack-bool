const merge = require('webpack-merge');
const baseConfig = require("./build/webpack.base.config");
const prodConfig = require("./build/webpack.prod.config");
const devConfig = require("./build/webpack.dev.config");

module.exports = (env) => {
    if (env === "production") {
        return merge(baseConfig, prodConfig);
    }

    if (env === "development") {
        return merge(baseConfig, devConfig);
    }
}