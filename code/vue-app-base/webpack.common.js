const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const pkg = require('./package.json')
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'js/bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          // limit: 10000,
          name: '[name].[ext]',
          esModule: false
        }
      },
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
  plugins: [
    // new CleanWebpackPlugin(),
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: pkg.description,
      filename: 'index.html',
      template: 'public/index.html',
      inject: true
    }),
    // new CopyWebpackPlugin([
    //   // 'public/**'
    //   'public'
    // ])
  ]
}