const path = require("path");
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CURRENT_WORKING_DIR = process.cwd()
const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: ['react-refresh/babel'],
                },
            }
        ]
    },
    devServer:{
        hot: true,
    },
    plugins: [new ReactRefreshWebpackPlugin()],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
        modules: ['client', 'node_modules'], // Assuming that your files are inside the src dir
        alias: {
            'react-dom': '@hot-loader/react-dom'
        },
    }
}
module.exports = (_, argv) => {
    const mode = argv.mode;
    const isDevelopment = mode === "development";
    return {
      config
    }
  };;