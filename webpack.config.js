var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports ={
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extransion: ['', '.js', '.jsx', '.json']
    },

    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css$/,
                loader:'style!css'
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)/,
                loader: 'url'
            }
        ]
    },
    devtool: 'cleap-module-source-map',
    devServer: {
        progress: true,
        contentBase: 'build',
        inline: true,
        stats: { colors: true}
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "react-message-broad",
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new OpenBrowserWebpackPlugin({
            url: "http://localhost:8080"
        })
    ]
}