
import Vue from 'vue' 
import App from './App.vue'

// vuex 全局数据管理
// import store from './store'
// Vue.use(store)

// vue-router 路由
import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
    render: h => h(App), // 介绍见main_learn.js
    router: router,
    // store: store,
    // beforeCreate() {
    //     Vue.prototype.$bus = this // 安装全局事件总线
    // },
}).$mount('#app')// el:'#app', 
