<template>
  <div>
    E gets {{ get }}
    <comF ref="comF"></comF>
  </div>
</template>

<script>
import comF from './comF.vue';
export default {
  components: {
    comF
  },
  props: {},
  data() {
    return {
      get: undefined
    };
  },
  mounted() {
    this.get = this.$refs.comF.gift
  }



}
</script>
<style scoped></style>