<template>
    <div>
        <input type="text" v-model="username">
        <button @click="toList">去列表页</button>
    </div>
</template>

<script>
    export default {
        name: "UserAdd",
        // 路由的钩子函数
        beforeRouteLeave(to,from,next){

            if(this.username){
                let confim = window.confirm('确定要切换嘛');
                if(confim){
                    next()
                }
            }else {
                next();
            }

        },
        data(){
            return {
                username:''
            }
        },
        methods:{
            toList(){ // vue.use(VueRouter) $router存的都是方法 $route存的都是属性
                this.$router.push('/user/list')
            }
        }
    }
</script>

<style scoped>

</style>
