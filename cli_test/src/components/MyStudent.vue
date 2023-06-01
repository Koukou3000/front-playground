<!--包含结构、样式、交互的组件文件-->
<template>
    <div class="hello">
        <span>{{name}}</span>
        <br>
     
        {{secret}}
    </div>
</template>

<script>
    // export简写形式
    export default {
        name:'MyStudent',
        data(){
            return{
                name:'迪克',
                secret:''
            }
        },
        methods: {
            learnTruth(val,...a){
                this.secret = a+ ':'+ val +';  ' + this.name +': 原来，你也玩____'
            }
        },
        // 声明自己关联的自定义方法
        mounted(){
            this.$bus.$on('studentGet',this.learnTruth)
        },
        beforeDestroy() {
            this.$bus.$off('studentGet')
        },
        
    }
</script>