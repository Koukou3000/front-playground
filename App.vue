<!--汇总如Student.vue的组件进行展示-->
<template>
    <div>
        <Student></Student>
    </div>
</template>

<script>
    import Student from './Student.vue'
    console.log('Student.vue is read!')
    // --------------
    const App = Vue.extend({
        name:'App',
        components:{Student}
    })
    export default App
//     export default{
//         name:'App',
//         components:{Student}
//    }
</script>



