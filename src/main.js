import Vue from 'vue'
import App from './App.vue'
//三级联动组件--全局组件
import typeNav from './components/typeNav/index.vue'
import carsouselApp from './components/carousel/index.vue'
import PaginationApp from './components/Pagination'
import router from "./router/index"
import store from './store'
import './mock/mockServe';
import 'swiper/css/swiper.css'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import * as API from '@/api'

Vue.use(ElementUI);


//第一个参数:全局组件名字  第二个参数:那个组件
Vue.component(typeNav.name, typeNav)
Vue.component(PaginationApp.name, PaginationApp)
Vue.component(carsouselApp.name, carsouselApp)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  //全局事件
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  }
}).$mount('#app')
