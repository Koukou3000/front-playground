<!--包含结构、样式、交互的组件文件-->
<template>
    <div class="hello">
        <span v-call="surname">{{name}}</span> -- {{age}} 
        <br>
        <div>个性签名：{{msg | myFilter}}</div>
        <button @click="componentMethod">点我传值给app</button>
    </div>
</template>

<script>
    // export简写形式
    export default {
        name:'HelloStudent',
        data(){
            return{
                name:'迪克',
                surname:'萨科迈'
            }
        },
        props:{
            msg:{
                type:String,
                default:'这个人很懒，没有留下什么'
            }, 
            age:{
                type:Number,
                 default:18
            }
        },
        methods: {
            componentMethod(){
                this.$emit('customAct',this.name,[1,2,3,4,5]) // 子组件给父组件传值     
            }
        },
        
    }
</script>