import Vue from 'vue'
// import App from './App.vue'
import  routes from './router/index'
import VueRouter from 'vue-router'

import './assets/css/index.css' // css reset
Vue.use(VueRouter);


Vue.config.productionTip = false


const router = new VueRouter({
    routes 
})
/** ?? */
new Vue({
  // render: h => h(App),  
  router
}).$mount('#app')