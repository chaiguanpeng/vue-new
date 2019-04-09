<template>
    <div>
        <ul>
            <!--<li><router-link to="/user/userDetail?id=1">详情页1</router-link></li>-->
            <li><router-link to="/user/userDetail/2">详情页2</router-link></li>
            <li><router-link to="/user/userDetail/3">详情页3</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "UserList",
        beforeRouteEnter(to,from,next){
            // 此方法不能拿到this  from是对象，中的name对应的是路由的名字
            if(from.name=='userAdd'){
                // alert(1)
            }
            // 当组件渲染完成后会调用 next中的方法
            next(vm=>{
                console.log(vm);
            });
        }
    }
</script>

<style scoped>

</style>
