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
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
}
module.exports = config;
