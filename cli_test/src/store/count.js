export default {
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