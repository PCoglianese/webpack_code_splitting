var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {app:'./src/app.js'
        
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        chunkFilename: '[name].[hash].[chunkhash].chunk.js'

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
          
            
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