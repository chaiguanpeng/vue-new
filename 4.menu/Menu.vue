<template>
    <ul class="menu">
        <slot></slot>
    </ul>

</template>

<script>
    export default {
        name: "Menu",
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
