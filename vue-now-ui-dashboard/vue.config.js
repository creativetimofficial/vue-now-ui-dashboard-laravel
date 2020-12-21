const path = require('path');
const webpack = require('webpack');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}
// vue.config.js
module.exports = {
  lintOnSave: true,
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        src: resolveSrc('src'),
        assets: resolveSrc('src/assets'),
        'chart.js': 'chart.js/dist/Chart.js'
      }
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ],
  },
  pwa: {
    name: 'Vue Now UI Dashboard',
    themeColor: '#212120',
    msTileColor: '#212120',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#212120'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }

};
