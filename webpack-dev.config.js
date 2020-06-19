const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 5000
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index-template.html',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};