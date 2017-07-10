var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve('app'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
      //loaders: ["react-hot", 'babel-loader'],
      //query: {
      //cacheDirectory: true,
      //presets: ['react', 'es2015']
      //}
    }]
  },
  stats: {
    colors: true
  }
};
