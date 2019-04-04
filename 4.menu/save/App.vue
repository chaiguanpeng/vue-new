<template>
   <div id="app">
       <!-- iview 中 menu MenuItem SubMenu -->
       <!-- 递归组件 数结构 菜单 -->
       <Menu>
           <MenuItem>菜单1</MenuItem>
           <MenuItem>菜单2</MenuItem>
           <MenuItem>菜单3</MenuItem>
           <!--SubMenu为二级菜单 -->
           <SubMenu>
               <template #title>菜单4</template>
               <MenuItem>菜单4-1</MenuItem>
               <MenuItem>菜单4-2</MenuItem>

               <!-- 还可能嵌套 -->
               <!--<SubMenu>-->
                   <!--<template #title>菜单4-3</template>-->
                   <!--<MenuItem>菜单4-3-1</MenuItem>-->
                   <!--<MenuItem>菜单4-3-2</MenuItem>-->
               <!--</SubMenu>-->
               <!--<SubMenu>-->
                   <!--<template #title>菜单4-4</template>-->
                   <!--<MenuItem>菜单4-4-1</MenuItem>-->
                   <!--<MenuItem>菜单4-4-2</MenuItem>-->
               <!--</SubMenu>-->
           </SubMenu>
       </Menu>
   </div>
</template>

<script>
    import Menu from './Menu'
    import MenuItem from './MenuItem'
    import SubMenu from './SubMenu'
    // 使用组件 3步  定义组件 引用组件 注册组件
    export default {
        name: "App",
        data(){
            return {
                menuList:[
                    {title:'菜单1'},
                    {title:'菜单2'},
                    {title:'菜单3'}
                ]
            }
        },
        components:{
            Menu,
            MenuItem,
            SubMenu
        }
    }
</script>

<style scoped>
    #app{
        color: red;
    }
</style>
