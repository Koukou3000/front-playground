<template>
  <div>Router-Room2
    <br>name - {{name}}
    <br>age - {{age}}
  </div>
</template>

<script>
export default {
    name:'RoomTwo',
    props:['name','age'],
    beforeDestroy() {
      console.log('r2  before destory')
    },
    
}
</script>

<style>

</style>