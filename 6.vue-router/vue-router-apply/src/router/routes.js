// 默认情况下只有首页默认显示 ，其他点击时才加载组件
import Home from '_v/Home';
// import Login from '_v/Login';
// import Profile from '_v/Profile';
// import User from '_v/User';

export default [
    {
        path:'/home',
        name:'home',
        component: Home
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
                path:'add',  // 路径默认儿子不能加/   正确写法/user/add
                name:'userAdd',
                component:()=>import('_v/UserAdd')
            },
            {
                path:'list',  // 路径默认儿子不能加/   正确写法/user/add
                name:'userList',
                component:()=>import('_v/UserList')
            }
        ]
    }
]
