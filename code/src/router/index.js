

const Home = () => import('../pages/Home/index.vue')
const User = () => import('../pages/User/index.vue')
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
    path: '/404',
    component: NotFound
  }
]

export default routes
