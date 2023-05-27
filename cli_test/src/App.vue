<!--汇总如Student.vue的组件进行展示-->
<template>
    <div>
        <h2 ref="title">can touch this</h2>
        <button @click="getTitle">hit to get title</button>
        <HelloStudent ref="vueCom"></HelloStudent>
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