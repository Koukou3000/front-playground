<template>
  <div>
    <button @click="emitStart">emitStart</button>
    {{ propVal }}
  </div>
</template>

<script>
export default {
    components: {},
    props: ['propVal'],
    data() {
        return {
          emitVal : ', and B'
        };
    },
  methods: {
    emitStart() {
      this.$emit('emitSth', this.emitVal)
    }
  }

}
</script>
<style scoped>
  
</style>