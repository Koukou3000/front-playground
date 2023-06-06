
import VueRouter from 'vue-router'


import RAbout from '../pages/RAbout'
import RHome from '../pages/RHome'
import RoomOne from '../pages/RoomOne'
import RoomTwo from '../pages/RoomTwo'


const router = new VueRouter({
    routes:[
        {
            path:'/about',
            component:RAbout,
            meta:{title:'关于'}
        },
        {
            path:'/home',
            component:RHome,
            meta:{title:'主页'},
            children:[{
                path:'room1',
                component:RoomOne,
                beforeEnter(to,from,next){
                    console.log('r1 独享路由守卫')
                    next()
                }
            },
            {
                name:'r2',
                path:'room2',
                component:RoomTwo,
                props($route){
                    return {
                        name: $route.params.name,
                        age: $route.params.age
                    }
                }

            }]
        }
    ]
})

router.beforeEach((to,from,next)=>{
    console.log(from.path,'=>',to.path)
    next()
})
router.afterEach((to)=>{
    document.title = to.meta.title
})
export default router