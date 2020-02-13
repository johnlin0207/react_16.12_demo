const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const path = require('path');

const config = merge(webpackConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        //contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000, // 端口号
        hot: true, // 是否启用热替换
        inline: true, // 控制台是否显示构建信息
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //热更新
        new OpenBrowserPlugin({url: `http://127.0.0.1:3000`}) // 构建完成打开浏览器插件
    ]
});

module.exports = config;