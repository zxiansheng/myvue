<style lang="less" scoped >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<template>
  <div id="app">
    <div v-if="$route.meta.showHeader">
      <Nav />
      <router-view />
    </div>
    <router-view v-if="!$route.meta.showHeader" />
  </div>
</template>
<script>
import Nav from './components/Nav'
export default {
  name: 'App',
  components: { Nav }
}
</script>
