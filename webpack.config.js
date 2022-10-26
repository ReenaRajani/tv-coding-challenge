const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.js'
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  devServer: {
    port: '3000',
    open: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/, 
        exclude: /node_modules/, 
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      { 
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"] 
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: path.join(__dirname, "src", "index.html"),
    })
  ],
}