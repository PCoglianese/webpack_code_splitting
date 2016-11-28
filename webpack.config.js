var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
        app:'./src/app.js', 
        app2: './src/app2.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        chunkFilename: '[name].[hash].[chunkhash].chunk.js'

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html', hash: true, chunks:['commons', 'app', 'app2']}),
        new CommonsChunkPlugin({
            name: 'commons',
            minChunks: 2,
            // children: true, // extract to parent, not into commons.js
            // async: true, // behavior not understood yet
            // minSize: 1
        })
    ],
    resolve: {
        alias: {
            d: path.resolve(__dirname, './src/d.js')
        }
        
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};