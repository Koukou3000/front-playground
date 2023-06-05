<template>
  <div> 
    <hr>
    <div>RHome -- 嵌套 Route</div>
    <router-link to="/home/room1" active-class="bold">房间甲</router-link><br>
    <router-link :to="{
      name:'r2',
      params:{
        name:'林口口',
        age:'20'
      }
    }" active-class="bold">房间乙</router-link>
  
    
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'RHome',
}
</script>

<style>
  .bold{
    font-weight: bold;
  }
</style>
