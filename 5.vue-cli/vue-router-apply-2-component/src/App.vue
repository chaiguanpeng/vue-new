<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- :pos='50' 取到的就是Number类型 value与input想到v-model(:value + input)  -->
    <ScrollBall color="red" :value="pos1" :target="500" @input="changeInput" ref="ball1">红球</ScrollBall>
    <ScrollBall color="red" v-model="pos1" :target="500">红球</ScrollBall>
    <ScrollBall color="blue" v-model="pos3" :target="500">篮球</ScrollBall>

    <!--官方推荐的一种写法 下面是上面的语法糖  :xxx.sync='pos4' = :xxx =pos4 + this.emit('update:xxx')  -->
    <ScrollBall color="red" :value="pos4" :target="500" @update:value="value=>pos4=value">红球</ScrollBall>
    <ScrollBall color="red" :value.sync="pos4" :target="500" >红球</ScrollBall>
    <button @click="getPosition">获取球的位置</button>
    <button @click="stopBall">停止</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld from '@/HelloWorld.vue'
import ScrollBall from './components/ScrollBall'
import axios from 'axios'
export default {
  name: 'app',
    data(){
        return {
            pos1:50,
            pos2:100,
            pos3:60,
            pos4:200
        }
    },
  props:{
    msg:String
  },
  components: {
    // HelloWorld,
      ScrollBall
  },
  mounted(){
    //  跨域 http://localhost:3000/getUser
    // axios.get('/api/getUser').then(data=>{
    //     console.log("data",data);
    // })
  },
    methods:{
        getPosition(){
            console.log(this.pos1);
        },
        changeInput(val){
            this.pos1 = val
        },
        stopBall(){
            console.log(this.$refs.ball1.stop);
            this.$refs.ball1.stop();
        }
    }
}
</script>

<style lang="less" >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
