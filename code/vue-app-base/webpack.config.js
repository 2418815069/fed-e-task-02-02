module.exports = (env = {}, args) => {
  const mode = args.mode === 'development'? args.mode : 'production'
  // 设置环境变量，能够在 base.js/defaults.js 中读取
  process.env.NODE_ENV = mode;
  if (mode === 'production') {
    return require('./webpack.prod');
  } else {
    return require('./webpack.dev');
  }
}