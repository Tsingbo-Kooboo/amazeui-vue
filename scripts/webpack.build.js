var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: path.resolve(__dirname, '../src/standalone.js'),

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: "/",
    filename: "amazeui-vue.js"
  },

  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
