## common.less的引入 (assets目录里)
- 如果common.less文件有@color这样的变量,如果用插件 https://github.com/nguyenvanduocit/vue-cli-plugin-style-resources-loader,在vue.config有用例， 第二种是在helloWorld.vue组件中单独引入，这种不能复用
- 如果common.less文件没有@color这样的变量，common.js引入可以放在2地方都可以，1、写在main.js中 import './assets/common.less' 2、App.vue @import "./assets/common";
## dist打包出来的html中注意点 （vue-cli文档有）
- defer 有序异步加载js
- async 异步 无序的，哪个js加载快就先运行哪个
- preload 可以对当前页面所需的脚本、样式等资源进行预加载
- prefetch 加载的资源一般不是用于当前页面的，是未来很可能用到的这样一些资源

## 2中编写组件的方法，在vue-router-allpy-2
- 组件的id 问题 _uid
- 属性问题 检验 ->计算属性
- 双向通信 props+emit 、v-model 、.sync
- 数据的绑定问题 $refs 拿到组件内部的方法 来调用组件中的方法
