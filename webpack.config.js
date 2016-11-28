var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['webpack/hot/dev-server','./src/app.js'],
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            children: true,
            minChunks: 2,
            async: true
        })
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};