const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/react/App/index.jsx'),
  output: {
    path: path.join(__dirname, 'build/js'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules/'),
        loader: 'babel-loader',
        query: {
          compact: false,
          presets: ['env', 'react'],
        },
      },
    ],
  },
};
