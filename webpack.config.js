const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './scripts/app.js',
    },
    output: {
        path: path.resolve(__dirname, './dist/assets'),
        filename: '[name].bundle.js',
        publicPath: '/assets'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src')
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: { presets: ['latest'] },
                exclude: [/(\/node_modules\/|test\.js|\.spec\.js$)/]
            },
            {
                test: /\.css$/,
                loader:  ExtractTextPlugin.extract({
                  loader: 'css-loader?importLoaders=1',
                })
              }
        ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: '[name].bundle.css',
        allChunks: true,
      }),
    ],
};
