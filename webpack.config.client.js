const path = require("path");
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CURRENT_WORKING_DIR = process.cwd(); //console.log("xfdcx:\n", path.join(CURRENT_WORKING_DIR, 'client/main.js'));
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
        publicPath: '/dist/',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // options: {
                //     plugins: ['react-refresh/babel'],
                // },
            }
        ]
    },
    plugins: [new ReactRefreshWebpackPlugin(), 'react-refresh/babel'],
    resolve: {
        modules: ['client', 'node_modules'], // Assuming that your files are inside the src dir
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
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
  };
