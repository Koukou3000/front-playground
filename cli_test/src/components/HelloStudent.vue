<!--包含结构、样式、交互的组件文件-->
<template>
    <div class="hello">
        {{name}} -- {{age}}
        <br>个性签名：{{msg}}
    </div>
</template>

<script>
    // 完整暴露
    // const HelloStudent = Vue.extend({
    //     name:'HelloStudent',
    //     data(){}
    // })
    // export default HelloStudent

    // 简写形式
    export default {
        name:'HelloStudent',
        data(){
            return{
                name:'kou',
                
            }
        },
        props:{
            msg:{
                type:String,
                default:''
            },
            age:{
                type:Number,
                required:true
            }
            

        }
    }
</script>