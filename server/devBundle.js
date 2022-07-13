import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.client.js';
console.log("GGG1: ", webpackConfig);
const webpackConfigReturned = webpackConfig();
const compile = (app) => {
    if (process.env.NODE_ENV === "development") {
        const compiler = webpack(webpackConfigReturned)
        const middleware = webpackMiddleware(compiler, {
            publicPath: webpackConfigReturned.output.publicPath,
            // publicPath: '/dist/'
        })
        app.use(middleware)
        app.use(webpackHotMiddleware(compiler))
    }
}
export default {
    compile
}
