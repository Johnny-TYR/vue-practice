<template lang="pug">
#HomeView
  Register(v-show="showRegister")
  Login(v-show="!showRegister")
  Button(type="warning" @click="showRegister = true") {{ "Register" }}
  Button(type="error" @click="showRegister = false") {{ "Login" }}
  Button(type="error" @click="ClearLocalStorage") {{"Clear Local Storage"}}
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
  methods:{
    ClearLocalStorage(){
      localStorage.clear()
    }
  }
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