import Vue from 'vue'
import App from './App.vue'
import routes from './router/index'
import VueRouter from 'vue-router'

import './assets/css/index.css' // css reset
Vue.use(VueRouter);


Vue.config.productionTip = false


const router = new VueRouter({
  routes
})
/** ?? */
new Vue({
  render: h => h(App),
  router
}).$mount('#app')


router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {  // 如果未匹配到路由
    next('/404')
  } else {
    next()    // 如果匹配到正确跳转
  }
})