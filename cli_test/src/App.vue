<!--汇总如Student.vue的组件进行展示-->
<template>
    <div>
        <HelloStudent></HelloStudent>
    </div>
</template>

<script>

    import HelloStudent from './components/HelloStudent'
    console.log('Student.vue is read!')
    
    const App = Vue.extend({
        name:'App',
        components:{HelloStudent},
     
    })
    export default App
//     export default{
//         name:'App',
//         components:{HelloStudent}
//    }
</script>



