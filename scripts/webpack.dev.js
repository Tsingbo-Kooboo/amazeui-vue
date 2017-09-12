var webpack = require('webpack');
var path = require('path');
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {

  entry: {
    app: path.resolve(__dirname, '../examples-dev/src/main.js'),
    vendor: ["vue"]
  },

  output: {
    path: path.resolve(__dirname, '../examples-dev/app'),
    publicPath: "/app/",
    filename: "app.js"
  },

  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
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

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      "amazeui-vue": path.resolve(__dirname, '..'),
      "views": path.resolve(__dirname, '../examples-dev/src/views')
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vue.js"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: "#inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, '../examples-dev/'),
    port: 9999,
    compress: true,
    allowedHosts: [
      'localhost'
    ],
    inline: true,
    hot: true
  }
};
