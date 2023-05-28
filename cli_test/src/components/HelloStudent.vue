<!--包含结构、样式、交互的组件文件-->
<template>
    <div class="hello">
        {{name}} -- {{age}}
        <br>个性签名：{{msg}}
    </div>
</template>

<script>
    // import {attach} from '../mixin'

    // export简写形式
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
                default:'这个人很懒，没有留下什么'
            }, 
            age:{
                type:Number,
                required:true
            }
        },
        // mixins:[attach]
    }
</script>