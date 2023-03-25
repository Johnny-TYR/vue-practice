<template lang="pug">
#HomeView
  .loginRegister
    Register(v-show="!isShowRegister")
    Login(v-show="isShowRegister")
    ButtonGroup
      Button(
        type="success",
        :size="buttonSize",
        @click="isShowRegister = false"
      ) {{ "註冊頁面" }}
      Button(
        type="primary",
        :size="buttonSize",
        @click="isShowRegister = true"
      ) {{ "登入頁面" }}
    ButtonGroup.cheatBtns(vertical)
      Button(type="warning", @click="ToggleLoginStatus") {{ "切換登入狀態" }}
      Button(type="error", @click="ClearLocalStorage") {{ "清除 localStorage" }}
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
      buttonSize: "large",
    };
  },
  methods: {
    ClearLocalStorage() {
      localStorage.clear();
    },
    ToggleLoginStatus() {
      this.$store.dispatch("ToggleLoginStatus");
    },
  },
};
</script>

<style lang="scss" scoped>
#HomeView {
  height: 100vh;
  background-color: lightskyblue;
  @extend .center;
  .loginRegister {
    display: flex;
    flex-direction: column;
  }
  .cheatBtns {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>