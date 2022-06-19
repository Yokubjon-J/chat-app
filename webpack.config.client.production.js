const path = require("path");
const webpack = require('webpack');
const CURRENT_WORKING_DIR = process.cwd()
const config = {
    mode: "production",
    entry: [
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: 'bundle.js',
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    }
}
module.exports = (_, argv) => {
    const mode = argv.mode;
    const isDevelopment = mode === "production";
    return {
      config
    }
};