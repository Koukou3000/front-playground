<!--汇总如Student.vue的组件进行展示-->
<template>
    <div>
        <h2 ref="title">这是一个标题</h2>
        <button @click="getTitle">hit to get refs</button>
        <HelloStudent ref="component_helloStudent" :age="18" ></HelloStudent>
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