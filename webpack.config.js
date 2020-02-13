const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-react']
                    // }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        }
                    },
                ],
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name]_[md5:contenthash:hex:20].bundle.css"),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            inject: true,
            title: "",
            favicon: './public/favicon.ico'
        })
    ]
};

module.exports = config;