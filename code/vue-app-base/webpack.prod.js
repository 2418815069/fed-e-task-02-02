const defaultSettings = require('./webpack.common');

const config = {
  mode: 'production',
  ...defaultSettings
}

module.exports = config;