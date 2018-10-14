import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

const webpackConfig = require('../../../webpack.dev');
const node_env = process.env.NODE_ENV;
const router = express.Router();
const compiler = webpack(webpackConfig);

const frontendMiddleware = app => {
  const isDev = node_env === 'development';
  if (isDev) {
    app.use(
      webpackDevMiddleware(compiler, {
        hot: true,
        publicPath: webpackConfig.output.publicPath
      })
    );
    app.use(
      webpackHotMiddleware(compiler, {
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000
      })
    );   
    return router;
  } else {
    app.use('/', express.static('build'));
    return router;
  }
};

export default frontendMiddleware;
