require('dotenv').config();
const { resolve } = require('path');

module.exports = {
  entry: [ 'babel-polyfill', resolve('./src/index') ],
  output: {
    path: resolve('./public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        options: {
          presets: [ 'env', 'react' ]
        }
      },
      {
        test: /\.(scss|css)$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader', ],
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
};