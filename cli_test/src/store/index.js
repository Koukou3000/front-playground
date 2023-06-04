import Vue from 'vue'
import Vuex from 'vuex'

// vuex模块
import countOptions from './count'
import personOptions from './person'


Vue.use(Vuex)
export default new Vuex.Store({
    // actions,mutations,state,getters
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})