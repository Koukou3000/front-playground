<!-- App.vue 汇总组件进行展示-->
<template>
    <div>
        <HelloStudent ref="helloStu" @click.native="showSTH"></HelloStudent>
        <hr>
        {{msgFromStu}}
    </div>
</template>

<script>
    import HelloStudent from './components/HelloStudent'
    export default{
        name:'App',
        components:{HelloStudent},
        data() {
            return {
                msgFromStu:''
            }
        },
        methods: {
            // 父给子传函数希望子调用，子调用则完成“子组件 => 父组件”的传值
            updateMsg(val,...arr){
                this.msgFromStu = val
                console.log('...arr = ',arr)
            },
            showSTH(){
                alert('@click.native ')
            }
        },
        mounted() {
            this.$refs.helloStu.$on('customAct',this.updateMsg)  
            // 给子组件1绑定自定义事件，子组件1使用$emit触发
        },
   }
</script>