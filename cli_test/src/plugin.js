export default {
    install(Vue){
        Vue.filter('myFilter',function(v){
            return v+' !'
        })

        Vue.directive('call',function(element,binding){   
            element.innerHTML = binding.value +' '+ element.innerHTML
        })

        Vue.mixin({
            data(){
                return {
                    mixin_data:114514
                }
            }
        })
    }
}