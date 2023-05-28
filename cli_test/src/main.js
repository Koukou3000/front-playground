// import Vue from 'vue/dist/vue.js' 引入开发版vue
//  'vue' === "module": "dist/vue.runtime.esm.js" 删减版vue
import Vue from 'vue' 
import App from './App.vue'

Vue.config.productionTip = false
// new Vue({ 
//   template:`<App></App>`,
//   components:{App}
// }).$mount('#app') // 先前的写法，由于引入的删减版不包含compiler，无法编译<template>

import {attach} from './mixin'
Vue.mixin(attach)
new Vue({
  // render(createElement){ // 1.传入的参数createElement是一个函数
  //   return createElement('h1','hello!')
  // }  

  // 2.未用this，可简化为箭头函数
    // render:createElement =>{
    //   return createElement('h1','hello!')
    // } 

    // 3.函数体只有返回语句，再次简化
    // render: f => f('h1','hello!')
    render: h => h(App)
}).$mount('#app')