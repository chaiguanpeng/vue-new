import Vue from 'vue'
import App from './App.vue'
import router from "./router"
Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css'

router.beforeEach((to,from,next)=>{
    console.log("all");
    next()
});
router.beforeResolve((to,from,next)=>{
    console.log("resolve");
    next()
});
router.afterEach(()=>{
    console.log("afterEach");
});
new Vue({
  //  生成的目录是下面的render
  render: h => h(App),
  //  在实例中使用router
  router
}).$mount('#app')
