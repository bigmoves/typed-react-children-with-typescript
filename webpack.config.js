const join = require('path').join;

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: join(process.cwd(), 'dist')
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ]
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};
