<!-- App.vue 汇总组件进行展示-->
<template>
    <div>
        <h2 ref="title">在ref中可以看到真实DOM</h2>
        <button @click="getTitle">getRefs</button>
        <hr>
        <HelloStudent ref="vueCom_1" :age="18" ></HelloStudent>
    </div>
</template>

<script>

    import HelloStudent from './components/HelloStudent'

    export default{
        name:'App',
        components:{HelloStudent},
        methods: {
            getTitle(){
                console.log(this.$refs)
            }
        },
   }
</script>