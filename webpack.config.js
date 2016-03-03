var path = require('path');
var webpack = require('webpack');
var libraryName = 'poyekhali';
var outputFile = libraryName + '.js';
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(.jsx|.js)$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  }
};
