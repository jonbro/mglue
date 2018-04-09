const path = require('path');
module.exports = {
  entry: './client_src/mglue.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  watch: true,
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'index.js',
    library: "mglue",
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  }
};