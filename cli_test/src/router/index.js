// vue-router
import VueRouter from 'vue-router'

import RAbout from '../components/RAbout'
import RHome from '../components/RHome'
const router = new VueRouter({
    routes:[
        {
            path:'/about',
            component:RAbout
        },
        {
            path:'/home',
            component:RHome
        }
    ]
})
export default router
