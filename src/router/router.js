import Home from '../pages/Home/index.vue'
import Login from '../pages/Login/index.vue'
import Register from '../pages/Register/index.vue'
import Search from '../pages/search/index.vue'
import Detail from '../pages/Detail/index.vue'
import AddCartSuccess from '../pages/AddCartSuccess/index.vue'
import Shopcart from '../pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from '../pages/Pay'
import PaySuccess from '../pages/PaySuccess'
import Center from '../pages/Center'
//引入二级路由
import myOrder from '../pages/Center/myOrder'
import groupOrder from '../pages/Center/groupOrder'

export default [
    {
        path: '/home',
        name:'home',
        component: Home,
        meta: { show: true }
    },
    {
        path: '/trade',
        name: 'trade',
        component: Trade,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            // ...
            if(from.path == '/shopcart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: '/login',
        name:'login',
        component: Login,
        meta: { show: false }
    },
    {
        path: '/shopcart',
        component:Shopcart,
        meta: { show: true }
    },
    {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    {
        path: '/pay',
        name:'pay',
        component: Pay,
        meta: { show: false },
        beforeEnter: (to, from, next) => {
            // ...
            if (from.path == '/trade') {
                next()
            } else {
                next(false)
            }
        }
        
    },
    {
        path: '/paysuccess',
        name: 'paysuccess',
        component: PaySuccess,
        meta: { show: false },
        
    },
    {
        path: '/center',
        name: 'center',
        component: Center,
        meta: { show: false },
        children:[
            {
                path:'myOrder',
                component: myOrder
            },
            {
                path: 'groupOrder',
                component: groupOrder
            },{
                path:'/center',
                redirect:'/center/myOrder'
            }
        ]
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true },
        props:(route) => ({
            keyword:route.params.keyword,
            big:route.query.big
        })

    },
    //引入详情页
    {
        path: '/detail/:skuid?',
        component: Detail,
        meta: { show: true }
    },
    //重定向
    {
        path: '/',
        redirect: '/home',
        meta: { show: true }
    }
]