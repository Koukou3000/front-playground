<template>
  <div>
    emit & prop 传值
    <comB :prop-val="fromA" @emitSth="handleEmit"></comB>
  </div>
</template>

<script>
import comB from './comB.vue';
export default {
  components: {
      comB
    },
    props: {},
    data() {
        return {
          fromA: 'its A'
        };
  },
  methods: {
    handleEmit(val) {
      this.fromA += val
    }    
  }

}
</script>
<style scoped>
  
</style>