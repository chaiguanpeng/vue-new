/* 第三方插件 引入后 要引入Vue.use()来初始化 调用install方法
  * install方法中注册了两个全局组件 router-link router-view
  * 会在每个组件上定义两个属性 $router $route,可以通过this.$router this.$route来得到
  *
*/
import Vue from "vue"
import VueRouter from "vue-router"
// 存放映射表
import routes from "./routes"
Vue.use(VueRouter);

export  default new VueRouter({
    mode:'hash',
    routes
});




