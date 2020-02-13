const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const path = require('path');

const config = merge(webpackConfig, {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    mode: 'production',
    devServer: {
        //contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000, // 端口号
        hot: true, // 是否启用热替换
        inline: true, // 控制台是否显示构建信息
    },
    plugins: [

    ]
});

module.exports = config;