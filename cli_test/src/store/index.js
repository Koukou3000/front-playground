import Vue from 'vue'
import Vuex from 'vuex'


const countOptions = {
    namespaced:'countAbout',
    actions:{
        add(context,value){
            context.commit('ADD',value)
        }
    },
    mutations:{
        ADD(state,value){
            state.count += value
        }
    },
    state:{
        count:0,
    },
    getters:{}
}

const personOptions = {
    // 模块名，后面数组带方法Getter|Action|Mutations，数据state
    namespaced:'personAbout',
    actions:{},
    mutations:{},
    state:{
        height: 183,
        weight: 180,
    },
    getters:{
        len(){
            return 11
        }
    }
}


Vue.use(Vuex)
export default new Vuex.Store({
    // actions,mutations,state,getters
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})