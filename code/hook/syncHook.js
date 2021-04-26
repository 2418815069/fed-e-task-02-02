const { SyncHook } = require('tapable')
let hook = new SyncHook(['name', 'age'])
// 对于异步钩子的使用，在添加事件监听时会存在三种方式，tap tapAsync tapPromise
hook.tap('fn1', function(name, age) {
  console.log('fn1-->', name, age)
})
hook.tap('fn2', function(name, age) {
  console.log('fn2-->', name, age)
})
hook.tap('fn3', function(name, age) {
  console.log('fn3-->', name, age)
})
hook.call('zce', 100)
// hook.tapAsync('fn1', function(name, callback) {
//   setTimeout(() => {
//     console.log('fn1-->', name)
//     callback()
//   }, 1000)
// })
// hook.tapAsync('fn2', function(name, callback) {
//   setTimeout(() => {
//     console.log('fn2-->', name)
//     callback()
//   }, 2000)
// })
// hook.callAsync('lg', function() {
//   console.log('最后一个回调执行了')
//   console.timeEnd('time')
// })
// hook.tapPromise('fn1', function(name) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log('fn2-->', name)
//       resolve()
//     }, 2000)
//   })
// })
// hook.promise('fn1', function(name) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log('fn2-->', name)
//       resolve()
//     }, 2000)
//   })
// })