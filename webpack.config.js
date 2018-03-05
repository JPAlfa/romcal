const path = require('path');
const webpack = require('webpack');

module.exports = {
  
  entry: {
    romcal: [
      './src/index.mjs'
    ]
  },

  output: {
    filename: '[name].bundle.min.js',
    path: path.join(__dirname, 'dist')
  },

  resolve: {
    extensions: [".js", ".mjs", ".json"]
  },

  mode: 'development',

  module: {
    rules: [
      // All files with '.mjs extension will be handled by 'babel-loader'.
      { test: /\.mjs?$/, loader: "babel-loader", exclude: /(node_modules|bower_components)/ },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {}
};
