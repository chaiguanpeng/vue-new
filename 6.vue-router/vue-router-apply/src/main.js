import Vue from 'vue'
import App from './App.vue'
import router from "./router"
Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css'
new Vue({
  //  生成的目录是下面的render
  render: h => h(App),
  //  在实例中使用router
  router
}).$mount('#app')
