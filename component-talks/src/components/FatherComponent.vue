<template>
  <div class="hello">
      <button @click="talksth">向子组件传值</button>
      <br>
      {{ sonsTalk }}
      <SonComponent :p1="fathersTalk" @listen="handleListen"></SonComponent>
  </div>
</template>

<script>
import SonComponent from './SonComponent.vue';
export default {
  name: 'FatherComponent',
  components: {
    SonComponent
  },
  props: {
    msg: String
  },
  data() {
    return{
      fathersTalk: '',
      sonsTalk: ''
    }
  },
  methods: {
    talksth() {
      this.fathersTalk = 'hello'
    },
    handleListen(e) {
      this.sonsTalk = e
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
