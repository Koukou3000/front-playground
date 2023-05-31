<!-- App.vue 汇总组件进行展示-->
<template>
    <div>
        <MyStudent/>
        <hr>
        <MyRoomMate/>
    </div>
</template>

<script>
    import MyRoomMate from './components/MyRoomMate'
    import MyStudent from './components/MyStudent'
    
    export default{
        name:'App',
        components:{MyStudent,MyRoomMate},
   }
</script>