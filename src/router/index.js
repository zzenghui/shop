import Vue from 'vue'
import VueRouter from "vue-router"
import routes from './router'
import store from '@/store'
Vue.use(VueRouter)

//把人家原型对象的push方法进行保存
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//VueRouter.prototype原型对象添加一个方法
//location:路由跳转相关的信息
VueRouter.prototype.push = function (location, resolve, reject) {
    //当前函数this：即为VueRouter类的实例
    //相当于push方法里面this，是windows【完犊子了】
    //利用人家push方法实现路由跳转，保证push里面this,应该vueRouter类的实例

    //面试:函数apply与call区别?
    //相同的地方:都可以篡改函数里面this
    //不同的地方:apply传递参数 数组  call传递参数 逗号分割

    if (resolve && reject) {
        //代表真:代表着两个形参接受参数【箭头函数】
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}


VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        //代表真:代表着两个形参接受参数【箭头函数】
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}


let router =  new VueRouter({   
    routes,
    
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
})


//路由守卫

router.beforeEach(async (to,from,next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name
    next()
    if (token) {
        if (to.path == '/login') {
            next('/home')
        }else{
            //登录去的不是login
            if(name){
                next()
            }else{
                try {
                    await store.dispatch('userInfo')
                    next()
                } catch (error) {
                    //token失效
                    //1.清除token
                    await store.dispatch('logOut')
                    next('/login')
                }
            }
        }
    }else{
        //未登录不能去交易相关的
        if (to.path.indexOf('/trade') !== -1 || to.path.indexOf('/pay') !== -1 || to.path.indexOf('/center') !== -1 || to.path.indexOf('/shopCart') !== -1){
            next('/login?redirect=' + to.path)
        }else{
        next()
        }
    }
})









export default router