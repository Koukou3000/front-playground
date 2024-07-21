<template>
  <div>
    C is giver, it gives "非响应式数据" to D. <br>
    <comD></comD>
  </div>
</template>

<script>
import comD from './comD.vue';
export default {
  components: {
    comD
  },
  props: {},
  provide: {
    gift: '非响应式数据'
  },  
  data() {
    return {
      drink: 'cola' // 响应式数据要用工厂函数
    };
  },

}
</script>
<style scoped></style>