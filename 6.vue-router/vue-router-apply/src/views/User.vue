<template>
    <div>
        <div class="col-md-3">
            <div class="nav nav-stacked">
                <ul>
                    <li><router-link :to="{name:'userAdd'}">添加用户</router-link></li>
                    <li><router-link :to="{name:'userList'}">用户列表</router-link></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9"></div>
    </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped>

</style>
