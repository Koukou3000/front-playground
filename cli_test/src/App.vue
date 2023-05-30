<!-- App.vue 汇总组件进行展示-->
<template>
    <div>
        <HelloStudent ref="helloStu" ></HelloStudent>
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
            updateMsg(val,...arr){
                this.msgFromStu = val
                console.log(arr)
            }
        },
        mounted() {
            // this.$refs.helloStu.$on('customAct',this.updateMsg)
            this.$refs.helloStu.$on('customAct',(val,...arr)=>{
                console.log(this)
                this.msgFromStu = val
                console.log(arr)
            })
        },
   }
</script>