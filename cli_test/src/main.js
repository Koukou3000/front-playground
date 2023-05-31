
import Vue from 'vue' 
import App from './App.vue'

Vue.config.productionTip = false

import plugin from './plugin'
Vue.use(plugin)

new Vue({
    render: h => h(App), // 介绍见main_learn.js
    beforeCreate() {
        Vue.prototype.$bus = this // 安装全局事件总线
    },
}).$mount('#app')// el:'#app', 