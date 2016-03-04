const path = require('path')
const webpack = require('webpack')
const libraryName = 'poyekhali'
const outputFile = libraryName + '.js'
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

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
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  }
}
