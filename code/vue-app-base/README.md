# vue-app-base

1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构
2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具）
3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务
4. 尽可能的使用上所有你了解到的功能和特性

#### 安装webpack
- yarn add webpack webpack-cli
#### 引用loader
- 处理各种图片资源，字体
  - url-loader：加载图片
  - html-loader: 处理html中的图片
- 兼容性处理
  - js处理
    - 将es6以上的语法，转换为es5以下的.@，promise对象转换，babel-loader，babel-loader @babel/preset-env @babel/core
  - 样式兼容性处理，less，scss
    - postcss-loader处理css兼容，适应各种浏览器内核
    - css-loader加载css，整合
    - style-loader创建标签, style 加载支持，将 css 编译为 js后动态使用style标签插入到 dom 中
    - sass-less，加载sass，转换为css，需要依赖node-sass
    - less-less，加载less，转换为css，需要依赖node-sass
- 文件资源加载
  - file-loader
- 代码规范检查，统一风格
  - eslint-loader
- 代码拆分
  - 模块文件过多，网络请求频繁，生产阶段打包到同一个文件
  - 实际需要某个模块，增量加载
- 代码压缩
  - 移除掉空格，注释，函数命名简化
  - 压缩图片、字体
    - url-loader加载图片字体

  - Tree-shaking：自动检测出未引用代码，移除掉
- 编译
  - 引入各种loader编译转换，如.scss,.less,vue,.md
#### 使用plugin
- 用到插件html-webpack-plugin，clean-webpack-plugin，copy-webpack-plugin
- 代码检查