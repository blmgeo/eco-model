
const webpack = require('webpack')
const path = require('path')
const fs = require('fs');
const nodeModules = {};

fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => nodeModules[mod] = 'commonjs ' + mod);
  
module.exports = {
  entry: './index.js',
  target: 'node',
  externals: nodeModules,
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'EcoModel.js',
    library: 'EcoModel',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
    ],
  },
};

