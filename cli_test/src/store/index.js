import Vue from 'vue'
import Vuex from 'vuex'
// Service
const actions = {
    add(context,value){
        context.commit('add',value)
    }
}
// DAO
const mutations = {
    add(state,value){
        state.count += value
    }
}
//data
const state = {
    count:0,
    height: 182,
    weight: 180,
}
//computed
const getters = {
    length(){
        return 11
    }
}



Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})