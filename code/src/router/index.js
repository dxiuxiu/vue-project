

const Foo = { template: '<div>home</div>' }
const Bar = { template: '<div>test</div>' }


const routes = [
    {
        path:'/',
        component:Foo
    },
    {
        path:'/test',
        component:Bar
    }
]

export default routes
