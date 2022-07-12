const path = require("path");
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CURRENT_WORKING_DIR = process.cwd();
const config = {
    name: "server",
    mode: "development",
    entry: [path.join(CURRENT_WORKING_DIR, './server/server.js')],
    target: "node",
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist/'),
        filename: "server.generated.js",
        publicPath: '/dist/',
        // libraryTarget: "commonjs2",
        clean: true,
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    devServer:{
        static: './dist',
        hot: true,
    },
}
module.exports = config;
