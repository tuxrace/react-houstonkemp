const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
  entry: ['webpack-hot-middleware/client?reload=true', __dirname + '/src/client/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'inline-source-map',
  mode: 'development',
});
