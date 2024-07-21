<template>
  <div>
    D is taker, it takes {{ unpack }} from C. <br>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  inject: ['gift'],
  data() {
    return {
      unpack: this.gift
    };
  },

}
</script>
<style scoped></style>