
import VueRouter from 'vue-router'


import RAbout from '../pages/RAbout'
import RHome from '../pages/RHome'
import RoomOne from '../pages/RoomOne'
import RoomTwo from '../pages/RoomTwo'


export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:RAbout
        },
        {
            path:'/home',
            component:RHome,
            children:[{
                path:'room1', // 嵌套已经蕴含了【/】 不需要再添加
                component:RoomOne
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
