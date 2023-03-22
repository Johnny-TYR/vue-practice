<template>
  <div id="app">
    <div class="navbar">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/forms">Forms</router-link> |
        <router-link :to="{ name: 'grid' }">Grid</router-link> |
        <router-link :to="{ name: 'vuex' }">Vue Vuex</router-link> |
        <router-link :to="{ name: 'transfer' }">Transfer</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>



<style>
#app .navbar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
