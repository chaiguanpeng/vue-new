# 路由的写法3中，用第三中
- 路由的写法 tag标签可以修改默认的a标签
- 1、写法1 <router-link to="/home" tag="span">首页</router-link>
- 2、写法2 <router-link  :to="{name:'home'}">首页</router-link>
- 3、写法3 <router-link  :to="{path:'/home'}">首页</router-link>
# 访问/user要有默认的视图显示，查看 router/routes.js文件
# vue.use(VueRouter) $router存的都是方法 $route存的都是属性
# beforeRouteEnter(to,from,next) 中不能拿到this
- from是对象，中的name对应的是路由的名字
- 当组件渲染完成后会调用 next中的方法

```
next(vm=>{
                console.log(vm);
            });

```

# 当用户详情页id手动变化时,想调用ajax，默认的mounted只会走一次，因为服用了之前的组件，具体看用户详情页
- 可以用watch
- 用 beforeRouteUpdate

# 路由通过？传参 不需要任何操作
- 具体看用户列表页

```angular2html
<li><router-link to="/user/userDetail?id=1">详情页1</router-link></li>
{{this.$route.query.id}}

```
- 通过路径参数传参需要该routes.js

```angular2html
 <li><router-link to="/user/userDetail/2">详情页2</router-link></li>
 {
                path:'userDetail/:id',
                name:'userDetail',
                component: ()=>import('_v/UerDetail.vue')
            },
  {{this.$route.params.id}}          
            
```
# 路由中的beforeEnter和组件中的beforeRouteEnter
- 先执行路由配置文件中的beforeEnter
- 再执行组件中的beforeRouteEnter

# main.js中router.beforeResolve和router.afterEach

# 路由的生命周期说明
- 离开路由会触发离开的钩子 beforeRouteLeave
- 如果进入到新的页面 beforeEach方法
- beforeEnter 进到路由的配置中
- beforeRouteEnter 组件进入时的钩子
- 解析完成 beforeResolve
- afterEach 当前进入完毕
- 当属性变化时 并没有重新加载组件 会触发beforeRouteUpdate方法
- 组件渲染完成后 会调用当前 beforeRouteEnter中next里回调方法

