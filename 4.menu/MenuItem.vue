<template>
    <div class="menuItem">
        <li><slot></slot></li>
    </div>
</template>

<script>
    export default {
        name: "MenuItem",
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
