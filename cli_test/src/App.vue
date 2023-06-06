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

        <!-- Vuex 
        <XPerson/>    
        <XCount/> -->
        <hr>

        VueRouter <br>     
            <button @click="back">back</button>
            <button @click="next">next</button><br>
        <router-link to="/about" active-class="router-bold">abouit</router-link><br>
        <router-link to="/home" active-class="router-bold">home</router-link>
        <router-view></router-view>


        <Roomone/>

        
        <el-button>按钮</el-button>
        
    </div>
</template>

<script>
    import MyRoomMate from './components/MyRoomMate'
    import MyStudent from './components/MyStudent'
    import TransitionLearn from './components/TransitionLearn'
    // import XPerson from './components/XPerson'
    // import XCount from './components/XCount'
    import Roomone from './pages/RoomOne.vue'

    export default{
        name:'App',
        components:{
            MyStudent,MyRoomMate,TransitionLearn,Roomone
            // XPerson,XCount
        },
        methods: {
            back(){
                this.$router.back()
            },
            next(){
                this.$router.forward()
            }
        },  
   }
</script>

<style lang="css">
    .router-bold{
        font-weight: bold;
    }
</style>