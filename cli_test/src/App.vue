<!-- App.vue 汇总组件进行展示-->
<template>
    <div>
        《组件间通信》
        <MyStudent/>
        <MyRoomMate/>
      

        <TransitionLearn>
            slot传递
        </TransitionLearn>
        <hr>

        Vuex 
        <XPerson/>    
        <XCount/>
    </div>
</template>

<script>
    import MyRoomMate from './components/MyRoomMate'
    import MyStudent from './components/MyStudent'
    import TransitionLearn from './components/TransitionLearn'
    import XPerson from './components/XPerson'
    import XCount from './components/XCount'

    export default{
        name:'App',
        components:{MyStudent,MyRoomMate,TransitionLearn,XPerson,XCount},
   }
</script>