const path = require("path");
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CURRENT_WORKING_DIR = process.cwd();

let isDevelopment = process.env.NODE_ENV === "development";

const config = {
    name: "server",
    mode: "development",
    entry: [path.join(CURRENT_WORKING_DIR, '/server/server.js')],
    target: "node",
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist/'),
        filename: "server.generated.js",
        publicPath: '/dist/',
        libraryTarget: "commonjs2",
        clean: true,
    },
    externals: [nodeExternals({
        allowlist: [/\.css$/]
    })],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
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
            //     ],
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
            //   }
        ],
    },
}
module.exports = config;
