<template>
  <div id="app">
    <nav>
      <p>QUE_IDEA</p>
    </nav>
    <section id="main">
      <aside>
        <router-link to="/login">Login</router-link>
        <router-link to="/links">Links</router-link>
      </aside>
      <div class="content">
        <router-view></router-view>    
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MainLayout extends Vue {}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Livvic&display=swap');
* {
  --layout-border: #cccccc;
  font-family: 'Livvic', sans-serif;
  font-size: 1em;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 3em auto;
  height: 100vh;
  margin: auto 0;
  padding: 0;
  text-align: center;
  width: 100vw;
}

nav {
  border-bottom: 1px solid var(--layout-border);
}

aside {
  border-right: 1px solid var(--layout-border);
  width: 15%;  
}

aside > a {
  background-color: #ebebeb;
  border-bottom: 1px solid var(--layout-border);
  display: block;
  padding: 1em;  
  text-decoration: none;
}

aside > a:hover {
  cursor: pointer;
  opacity: .5;
}

#main {
  display: flex;
  flex-direction: row;
}

.content {
  display: block;
  margin: 0 auto;
  padding: 2em;
}

.logo {
  width: 20em;
}
</style>
