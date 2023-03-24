<template lang="pug">
#HomeView
  Register(v-show="showRegister")
  Login(v-show="!showRegister")
  Button(@click="showRegister = true") {{ "Register" }}
  Button(@click="showRegister = false") {{ "Login" }}
</template>

<script>
export default {
  name: "HomeView",
  components: {
    Register: () => import("@/components/Auth/Register.vue"),
    Login: () => import("@/components/Auth/Login.vue"),
  },
  data() {
    return {
      showRegister: false,
    };
  },
};
</script>

<style lang="scss" scoped>
#HomeView {
  height: 100vh;
  background-color: lightskyblue;
  @extend .center;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>