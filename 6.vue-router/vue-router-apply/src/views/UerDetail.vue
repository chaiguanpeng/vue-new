<template>
    <div>
        用户详情
        <!-- 通过?传参过去 -->
        {{this.$route.query.id}}
        <!--通过路由的路径传递参数 -->
        {{this.$route.params.id}}
    </div>
</template>

<script>
    export default {
        name: "UerDetail",
        mounted(){
            console.log(this.$route);
        },
        //1、可以通过监控$route实现加载数据
        // watch:{
        //     $route(){
        //         alert(1)
        //     }
        // },
        beforeRouteUpdate(to,from,next){
            alert(1);
            next();
        },
        beforeRouteEnter(to,from,next){
            console.log("beforeRouteEnter");
            next()
        }
    }
</script>

<style scoped>

</style>