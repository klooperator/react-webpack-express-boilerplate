const path = require('path');
const webpack = require('webpack');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './Main.html',
  filename: './index.html',
});

module.exports = {
  entry: ['./index.js', 'webpack-hot-middleware/client'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  /* devServer: {
    contentBase: './dist',
    hot: true,
  }, */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new webpack.HotModuleReplacementPlugin(),
    /* new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']), */
  ],
};
