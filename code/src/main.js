import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import './assets/css/index.css' // css reset

import store from './store'
Vue.use(VueRouter);


Vue.config.productionTip = false


/** ?? */
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {  // 如果未匹配到路由
    next('/404')
  } else {
    next()    // 如果匹配到正确跳转
  }
})