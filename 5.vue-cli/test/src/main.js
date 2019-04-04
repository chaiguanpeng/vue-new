import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// import './assets/common.less'
new Vue({
  //  如果我们非要使用template,在vue.config.js中runtimeCompiler:true
    template: '<h1>hello123</h1>',

  //  生成的目录是下面的render
  render: h => h(App),
}).$mount('#app')
