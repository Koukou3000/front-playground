<!-- App.vue 汇总组件进行展示-->
<template>
    <div>
        《组件间通信》
        <MyStudent/>
        <MyRoomMate/>
        <hr>

        <TransitionLearn>
            传递一些内容
        </TransitionLearn>
        <hr>

        Vuex <br>
        count = {{$store.state.count}}<br>
        <button @click="vuexAdd">加</button>
    
    </div>
</template>

<script>
    import MyRoomMate from './components/MyRoomMate'
    import MyStudent from './components/MyStudent'
    import TransitionLearn from './components/TransitionLearn'
    export default{
        name:'App',
        components:{MyStudent,MyRoomMate,TransitionLearn},
        methods: {
            vuexAdd(){
                this.$store.dispatch('add',1)
            }
        },
   }
</script>