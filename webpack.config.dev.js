import path from 'path'
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'src'),
        ],
        loaders: [ 'babel' ]
      },
       { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },
  resolve: {
    extentions: [ '', '.js' ]
  }
}