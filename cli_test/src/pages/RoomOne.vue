<template>
  <div>Router-Room1</div>
</template>

<script>
export default {
    name:'RoomOne',
    beforeDestroy() {
      console.log('r1 before destory')
    },
    beforeRouteEnter (to, from, next) {
      console.log('路由规则方式进入组件r1')
      next()
    }
}
</script>

<style>

</style>