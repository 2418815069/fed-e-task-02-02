const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  // 这个属性有三种取值，分别是 production、development 和 none。
  // 1. 生产模式下，Webpack 会自动优化打包结果；
  // 2. 开发模式下，Webpack 会自动优化打包速度，添加一些调试过程中的辅助；
  // 3. None 模式下，Webpack 就是运行最原始的打包，不做任何额外处理；
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: vueLoaderConfig
      },
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   include: [resolve('src'), resolve('test')]
      // },
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10000,
      //     name: utils.assetsPath('img/[name].[hash:7].[ext]')
      //   }
      // },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":"content-type",
      "Access-Control-Allow-Methods":"DELETE,PUT,POST,GET,OPTIONS"
    },
    // contentBase: './dist',
    // proxy: {
    //   '/api': {
    //     // http://localhost:8080/api/users -> https://api.github.com/api/users
    //     target: 'https://api.github.com',
    //     pathRewrite: {
    //       '^/api': ''
    //     },
    //     // 不能使用 localhost:8080 作为请求 GitHub 的主机名
    //     changeOrigin: true
    //   }
    // }
  },
}