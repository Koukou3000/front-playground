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

        App - Vuex <br>
        count = {{count}}<br>
        {{height}} {{weight}} {{length}}
        <MyPerson/>    
    </div>
</template>

<script>
    import MyRoomMate from './components/MyRoomMate'
    import MyStudent from './components/MyStudent'
    import TransitionLearn from './components/TransitionLearn'
    import MyPerson from './components/MyPerson'

    import {mapState,mapGetters} from 'vuex'
    export default{
        name:'App',
        components:{MyStudent,MyRoomMate,TransitionLearn,MyPerson},
       
        computed:{
            /* ...mapState({height:'height',weight:'weight',length:'length'}),
                height:'height',
                weight:'weight',
                length:'length'
            */
            ...mapState(['height','weight','count']),
            ...mapGetters({length:'length'})
        }
   }
</script>