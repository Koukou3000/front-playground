<template>
  <div> 
    <hr>
    <div>RHome -- 嵌套 Route</div>



    <router-link to="/home/room1" active-class="bold">房间甲</router-link>
    <button @click="pushShow">push</button>
    <button @click="replaceShow">replace</button><br>



    <router-link :to="{
      name:'r2',
      params:{
        name:'林口口',
        age:'20'
      }
    }" active-class="bold">房间乙</router-link>

    <keep-alive include="RoomTwo">
      <router-view></router-view>
    
    </keep-alive>
  </div>
</template>

<script>
export default {
    name:'RHome',
    methods: {
      pushShow(){
        this.$router.push({
            path:'/home/room1'
        })
      },
      replaceShow(){
        this.$router.replace({
            path:'/home/room1'
        })
      },
    },
    
}
</script>

<style>
  .bold{
    font-weight: bold;
  }
</style>
