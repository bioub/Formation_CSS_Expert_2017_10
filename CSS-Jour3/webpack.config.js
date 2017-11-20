const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

// 1 - Builder le scss (voir la doc de sass-loader)
// 2 - Ajouter banner plugin (copyright en début de fichier)

const extractScss = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: {
    app: './src/js/main.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].[hash].js',
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['env', {
            //targets: "last 2 versions, ie 10",
            modules: false,
          }]],
        },
      }
    }, {
      test: /\.scss$/,
      use: extractScss.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        // use style-loader in development
        fallback: "style-loader"
      }),
    }],
  },
  plugins: [
    /*
    new UglifyJsPlugin({
      uglifyOptions: {
       // mangle: false,
      }
    }),
    */
    extractScss,
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
      }
    }),
    new webpack.BannerPlugin({
      banner: 'Copyright Moi 2017',
    })
  ],
};
