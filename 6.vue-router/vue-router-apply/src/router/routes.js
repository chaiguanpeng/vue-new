// 默认情况下只有首页默认显示 ，其他点击时才加载组件
import Home from '_v/Home';
import Name from '_v/Name';
import Version from '_v/Version';
// import Login from '_v/Login';
// import Profile from '_v/Profile';
// import User from '_v/User';

export default [
    {
        path:'/',
        redirect:{path:'/home'}
    },
    /* 默认只有一个视图
    {
        path:'/home',
        name:'home',
        component: Home
    },
    */
    {
        path:'/home',
        name:'home',
        components: {
            default:Home,
            rename:Name,
            version:Version
        }
    },
    {
        path:'/login',
        name:'login',
        component: ()=>import('_v/Login')
    },
    {
        path:'/profile',
        name:'profile',
        component: ()=>import('_v/Profile')
    },
    {
        path:'/user',
        name:'user',
        component: ()=>import('_v/User'),
        children:[
            {
                path:'',  // 路径默认儿子不能加/   正确写法/user/add
                component:()=>import('_v/UserAdd')
            },
            {
                path:'add',  // 路径默认儿子不能加/   正确写法/user/add
                name:'userAdd',
                component:()=>import('_v/UserAdd')
            },
            {
                path:'list',  // 路径默认儿子不能加/   正确写法/user/add
                name:'userList',
                component:()=>import('_v/UserList')
            },
            {
                path:'userDetail/:id',
                name:'userDetail',
                component: ()=>import('_v/UerDetail.vue'),
                beforeEnter(to,from,next){
                    console.log("beforeEnter");
                    next()
                }
            },
        ]
    },
    {
        path:'*',
        component:()=>import('_v/404')
    }
]
