import Vue from 'vue'
import Vuex from 'vuex'

const actions = {
    add(context,value){
        // console.log('actions/addFunction is invoked')
        context.commit('add',value)
    }
}
const mutations = {
    add(state,value){
        console.log('mutations/addFunction is invoked')
        state.count += value
    }
}
const state = {
    count:0,
}

Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    mutations,
    state
})