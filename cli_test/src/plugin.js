export default {
    install(Vue){
        Vue.filter('myFilter',function(v){
            return v+' (plugin.js'
        })

        Vue.directive('call',function(element,binding){   
            element.innerHTML = binding.value +' '+ element.innerHTML
        })

        Vue.mixin({
            data(){
                return {
                    mixin_data:'from plugin.js'
                }
            }
        })
    }
}