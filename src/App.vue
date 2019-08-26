<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/idea.png">
    <Login />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Login from './components/Login.vue';

@Component({
  components: {
    Login,
  },
})
export default class App extends Vue {}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Livvic&display=swap');
* {
  font-family: 'Livvic', sans-serif;
  font-size: 1em;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 20em;
}
</style>
