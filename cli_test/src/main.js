
import Vue from 'vue' 
import App from './App.vue'

Vue.config.productionTip = false

//custom 自选插件
import plugin from './plugin'
Vue.use(plugin)

// vuex 全局数据管理
import store from './store'
Vue.use(store)

// vue-router 路由
import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)

new Vue({
    render: h => h(App), // 介绍见main_learn.js
    router: router,
    store: store,
    beforeCreate() {
        Vue.prototype.$bus = this // 安装全局事件总线
    },
}).$mount('#app')// el:'#app', 
