<!--汇总如Student.vue的组件进行展示-->
<template>
    <div>
        <HelloStudent></HelloStudent>
    </div>
</template>

<script>

    import HelloStudent from './components/HelloStudent'
    
    // const App = Vue.extend({
    //     name:'App',
    //     components:{HelloStudent},
    // })
    // export default App

    // 简写形式
    export default{
        name:'App',
        components:{HelloStudent}
   }
</script>



