<template>
    <div id="app">{{msg}}</div>
</template>

<script>
    export default {
        name: "App",
        data(){
            return {
                msg:'hello'
            }
        }
    }
</script>

<style scoped>
    #app{
        color: red;
    }
</style>
