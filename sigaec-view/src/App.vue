<template>
  <div id="app">
    <MenuLateral v-if="renderMenu()"></MenuLateral>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- O router view apresenta no navegador o view selecionado. 
    Deve estar configurado no arquivo de router em router/index.js
    -->
    <router-view />
  </div>
</template>

<script>
import MenuLateral from "@/components/MenuLateral.vue";

export default {
  components: {
    MenuLateral
  },
  methods: {
    renderMenu() {
      console.log(this.$route.matched);
      if (this.$route.matched.some(record => record.meta.notRenderMenu)) {
        return false;
      }
      return true;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
