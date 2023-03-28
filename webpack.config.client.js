const path = require("path");
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CURRENT_WORKING_DIR = process.cwd();
const nodeExternals = require('webpack-node-externals');

let isDevelopment = process.env.NODE_ENV === "development";
const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: "./client/main.js",
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist/'),
        filename: 'bundle.js',
        publicPath: '/dist/',
        clean: true,
    },
    // optimization: {
    //     // runtimeChunk: 'single',
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all',
    //             },
    //         },
    //     },
    // },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ],
                        plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),                        
                    },
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            // {
            //     test: /\.css$/,
            //     include: /node_modules/,
            //     use: [
            //         "style-loader",
            //         { loader: "css-loader", options: { modules: true } }
            //     ]
            // },
            // {
            //     test: /\.css$/i,
            //     oneOf: [
            //       {
            //         include: /node_modules/,
            //         use: [
            //           "style-loader",
            //           { loader: "css-loader", options: { modules: true } }
            //         ]
            //       },
            //       {
            //         use: [
            //           "style-loader",
            //           "css-loader"
            //         ]
            //       }
            //     ]
            //   },
        ]
    },
    // externals: [nodeExternals({
    //     allowlist: [/\.css$/i]
    // })],
    plugins: [isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),
    // resolve: {
    //     modules: ['client', 'node_modules'], // Assuming that your files are inside the src dir
    //     extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    //     alias: {
    //         'react-dom': '@hot-loader/react-dom'
    //     },
    // }
}
module.exports = () => {
    isDevelopment = process.env.NODE_ENV === "development";
    return config
};