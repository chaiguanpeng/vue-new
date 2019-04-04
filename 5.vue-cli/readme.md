## common.less的引入 (assets目录里)
- 如果common.less文件有@color这样的变量,如果用插件 https://github.com/nguyenvanduocit/vue-cli-plugin-style-resources-loader,在vue.config有用例， 第二种是在helloWorld.vue组件中单独引入，这种不能复用
- 如果common.less文件没有@color这样的变量，common.js引入可以放在2地方都可以，1、写在main.js中 import './assets/common.less' 2、App.vue @import "./assets/common";
