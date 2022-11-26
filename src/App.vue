<template>
  <div id="app">
    <LogoutBtn />
    <router-view />
  </div>
</template>

<script>
import LogoutBtn from "./components/LogoutBtn.vue";
export default {
  name: "App",
  components: {
    LogoutBtn,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
