<template>
  <div id="app">
    <div>
      vertical
      <br>----------------------<br>
      <comA></comA>
      <br>----------------------<br>
      <comC></comC>
      <br>----------------------<br>
      <comE></comE>
    </div>
    <div>
      horizontal
    </div>

    <div>
      none business
    </div>







  </div>
</template>

<script>
import comA from './components/comA.vue';
import comC from './components/comC.vue';
import comE from './components/comE.vue';
export default {
  name: 'App',
  components: {
    comA, comC, comE
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
  display: flex;
  width: 100%;
}

#app>div {
  border: 1px solid black;
  flex: 1;
}
</style>
