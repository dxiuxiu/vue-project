
// import Home from '../pages/Home/index.vue'
import Ap from '../pages/index.vue'
const Home = { template: '<div>home</div>' }
const Test = { template: '<div>test</div>' }
import NotFound from '../components/NotFound/index.vue'
// import App from '../App.vue'
/** 默认值内容?? */
const routes = [
    {
        path:'/',
        component: Ap,
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
      path:'/404',
      component:NotFound
    }
]

export default routes
