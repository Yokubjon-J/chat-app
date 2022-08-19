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
                test: /\.js$/,
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
            }
        ]
    },
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: "http://localhost:3000/rooms/one/", to: 'http://localhost:3000/' },
              ],
          }
    },
}
module.exports = config;
