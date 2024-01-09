<template>
  <div id="app">
    <FatherComponent></FatherComponent>
  </div>
</template>

<script>
import FatherComponent from './components/FatherComponent.vue';
export default {
  name: 'App',
  components: {
    FatherComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
