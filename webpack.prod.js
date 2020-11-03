const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'out'), //打包的文件夹
        filename: '[name]/[name].[hash].js',
        chunkFilename: "[name]/[name].[hash].js"
    },
    mode: "production",
    devtool: 'source-map',
    module: {
        rules: [
            
        ]
    },
    optimization: {

    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
    ],
});