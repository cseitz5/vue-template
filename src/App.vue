<template>
  <div id="app">
    <title>Kent Hack Enough</title>
    <div id="nav" v-if="desktop">
      <router-link v-for="route in $router.options.routes.filter(o => !o.hidenav)" :key="route.path" :to="route.path">{{ route.name }}</router-link>
    </div>
    <div id="nav" v-else>
      <router-link style="color: red!important;" v-for="route in $router.options.routes.filter(o => !o.hidenav)" :key="route.path" :to="route.path">{{ route.name }}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/global.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
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
