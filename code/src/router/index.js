
// import Page from '../pages/index.vue'
// const Home = { template: '<div>home</div>' }
const Test = { template: '<div>test</div>' }
// import NotFound from '../components/NotFound/index.vue'

const Page = () => import('../pages/index.vue')
const Home = () => import('../pages/Home/index.vue')
const User = () => import('../pages/User/index.vue')
const NotFound = () => import('../components/NotFound/index.vue')
// import App from '../App.vue'
/** 默认值内容?? */
const routes = [
    {
        path:'/',
        component: Page,
        redirect:'/home',
        children: [
            {
              path: 'home',
              component: Home
            },
            {
              path: 'test',
              component: Test
            }
          ]
    },
    {
      path:'/user',
      component:User
    },
    {
      path:'/404',
      component:NotFound
    }
]

export default routes
