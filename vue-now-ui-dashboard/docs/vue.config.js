// vue.config.js
const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

module.exports = {
  lintOnSave: true,
  publicPath: '/documentation',
  configureWebpack: {
    resolve: {
      alias: {
        src: resolveSrc('../src')
      }
    }
  }
};
