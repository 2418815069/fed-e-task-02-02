const defaultSettings = require('./webpack.common');

const config = {
  mode: 'development',
  ...defaultSettings
}

module.exports = config;