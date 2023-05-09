<template lang="pug">
//- 請填寫功能描述👈
#LineLogin
  img.line-login-btn(src="/imgs/btn_login_press.png" @click="LineLogin")
  //- Button.line-login-btn(@click="LineLogin") {{ "Line Login Button" }}
</template>

<script>
export default {
  name: "LineLogin",
  data() {
    return {};
  },
  methods: {
    LineLogin() {
      let urlQuery = {
        response_type: "code",
        client_id: "1661076147",
        redirect_uri: "http://localhost:8080/timer",
        state: "login",
        scope: "profile%20openid%20email"
      }
      let URL = "https://access.line.me/oauth2/v2.1/authorize?";
      URL += `response_type=${urlQuery.response_type}`;
      URL += `&client_id=${urlQuery.client_id}`;
      URL += `&redirect_uri=${urlQuery.redirect_uri}`;
      URL += `&state=${urlQuery.state}`;
      URL += `&scope=${urlQuery.scope}`;
      console.log(URL)
      window.location.href = URL
    }
  }
};
</script>

<style lang="scss" scoped>
// 排版
#LineLogin {}

// 元件
#LineLogin {
  .line-login-btn {
    width: 150px;
    &:active {
      transform: scale(0.99);
    }
  }
}
</style>
