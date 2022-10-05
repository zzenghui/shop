//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

import home from './home'
import search from './search'
import detail from './detail'
import shopCart from './shopCart'
import user from './user'
import trade from './trade'

//创建并暴露store
export default new Vuex.Store({
   modules: {
      home,
      search,
      detail,
      shopCart,
      user,
      trade
   }
})