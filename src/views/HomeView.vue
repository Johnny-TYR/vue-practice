<template lang="pug">
#HomeView
  Register(v-show="!isShowRegister")
  Login(v-show="isShowRegister")
  Button(type="warning", @click="isShowRegister = false") {{ "Register" }}
  Button(type="error", @click="isShowRegister = true") {{ "Login" }}
  Button(type="error", @click="ClearLocalStorage") {{ "Clear Local Storage" }}
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
      isShowRegister: false,
    };
  },
  methods: {
    ClearLocalStorage() {
      localStorage.clear();
    },
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