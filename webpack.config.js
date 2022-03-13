const path = require('path');
const webpack = require('webpack');
const assetsPlugin = require('assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const entries = require('./bundleConfigs');

const assetsOptions = {
  removeFullPathAutoPrefix: true,
  filename:'./assets/assets.json'
};

module.exports = {
  mode: 'production',
  devtool: 'eval',
  context: path.resolve(__dirname, 'src'),
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      { 
        test: /\.tsx?$/, 
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }],
        exclude: /node_modules/ 
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new assetsPlugin(assetsOptions)
  ],
  optimization:{
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    }
  },
  devServer: {
    static: { directory: path.join(__dirname, 'dist'), },
  }
};