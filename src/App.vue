<template>
  <div id="app">
    <div class="navbar" v-show="isLoggedIn">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/forms">Forms</router-link>
        <router-link :to="{ name: 'grid' }">Grid</router-link>
        <router-link :to="{ name: 'vuex' }">Vue Vuex</router-link>
        <router-link :to="{ name: 'iview' }">iView</router-link>
      </nav>
    </div>
    <router-view :style="contentStyle"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarHeight: 100,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    contentStyle(){
      return{
        paddingTop:`${this.navbarHeight}px`
      }
    }
  },
};
</script>

<style lang="scss">
#app {
  position: relative;
  display: block;
  .navbar {
    position: fixed;
    z-index: 100;
    font-size: 20px;
    font-weight: 700;
    background-color: black;
    width: 100%;
    nav {
      display: flex;
      justify-content: space-around;
      // padding: 10px 20px;
      a {
        background-color: #fff;
        padding: 10px 20px;
        flex: 1;
        border: 1px solid black;
        border-radius: 5px;
        margin: 10px;
        text-align: center;
      }
    }
  }
}
</style>
