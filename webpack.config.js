const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: process.env.MODE,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000
  }
}