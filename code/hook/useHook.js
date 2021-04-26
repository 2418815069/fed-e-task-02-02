const { SyncHook } = require('tapable')
let hook = new SyncHook(['name', 'age'])
hook.tap('fn1', function(name, age) {
  console.log('fn1-->', name, age)
})
hook.tap('fn2', function(name, age) {
  console.log('fn2-->', name, age)
})
hook.call('zce', 100)
/**
 * 01 实例化hook，定义_x = [f1, f2, ...] taps = [{}, {}]
 * 02 实例化 tap taps = [{}，{}]
 * 03 调用call方法，HookCodeFactory setup create
 * 04 Hook SyncHook HookCodeFactory
 */