<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HelloWorld from '@/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'app',
  props:{
    msg:String
  },
  components: {
    HelloWorld
  },
  mounted(){
    //  跨域 http://localhost:3000/getUser
    axios.get('/api/getUser').then(data=>{
        console.log("data",data);
    })
  }
}
</script>

<style  lang="less">
  /*@import "./assets/common";*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
