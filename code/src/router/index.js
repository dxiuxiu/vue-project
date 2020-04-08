
import VueRouter from 'vue-router'

const Home = () => import('../pages/Home/index.vue')
const User = () => import('../pages/User/index.vue')
const City = () => import('../pages/City/index.vue')
const NotFound = () => import('../components/NotFound/index.vue')
// import App from '../App.vue'
/** 默认值内容?? */
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/404',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})
export default router
