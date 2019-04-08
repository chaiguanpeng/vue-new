<template>
  <div id="app">
    <div class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="navbar-brand">
              <a>管理</a>
          </div>
        </div>
        <ul class="navbar-nav nav">
            <li>
              <!-- 路由的写法 tag标签可以修改默认的a标签 -->
              <!--1、写法1 <router-link to="/home" tag="span">首页</router-link>-->
              <router-link  :to="{name:'home'}">首页</router-link>
            </li>
            <li>
              <router-link :to="{name:'profile'}">个人中心</router-link>
            </li>
            <li>
              <router-link :to="{name:'user'}">用户</router-link>
            </li>
            <li>
              <router-link :to="{name:'login'}">登录</router-link>
            </li>
          </ul>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  props:{
    msg:String
  },
  components: {

  }
}
</script>

<style lang="less" >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
</style>
