export default {
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