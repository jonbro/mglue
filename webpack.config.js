const path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './client_src/WormDrive.ts',
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
  plugins: [
    new LiveReloadPlugin()
  ],
  externals: {
    tone: 'Tone'
  },
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'public')
  }
};