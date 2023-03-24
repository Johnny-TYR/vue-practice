<template lang="pug">
#Login
  Form.LoginForm(
    ref="loginForm",
    :model="loginForm",
    :rules="loginRules",
    :label-width="80",
    label-position="left"
  )
    h1 {{ "Login" }}
    .input-area
      FormItem(label="Account", prop="account")
        Input(type="email", v-model="loginForm.account")
          Icon(type="ios-contact", slot="prepend")
      FormItem(label="Password", prop="password")
        Input(type="password", v-model="loginForm.password")
          Icon(type="ios-lock", slot="prepend")
      FormItem
        Button(type="primary", @click="HandleSubmit('loginForm')") {{ "Login" }}
        Button(type="error", @click="HandleClear('loginForm')") {{ "Clear" }}
    pre {{ loginForm }}
</template>

<script>
export default {
  data() {
    const validateAccount = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("請輸入帳號"));
      }
      if (value !== "123@gmail.com") {
        return callback(new Error("帳戶錯誤"));
      }
      return callback();
    };
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("請輸入密碼"));
      }
      if (value !== "123456") {
        return callback(new Error("密碼錯誤"));
      }
      return callback();
    };
    return {
      loginForm: {
        account: "",
        password: "",
      },
      loginRules: {
        account: [{ validator: validateAccount, trigger: "change" }],
        password: [{ validator: validatePassword, trigger: "change" }],
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  mounted() {
    // this.CheckUserAuth();
  },
  methods: {
    HandleSubmit(refName) {
      this.$refs[refName].validate((valid) => {
        if (valid) {
          this.LoginSuccessful();
          this.CheckUserAuth();
          return this.$Message.success("登入成功");
        }
        return this.$Message.error("登入失敗");
      });
    },
    HandleClear(refName) {
      this.$refs[refName].resetFields();
    },
    // Check auth
    // CheckUserAuth() {
    //   const data = JSON.parse(localStorage.getItem("userList"));
    //   for (let i = 0; i < data.length; i++) {
    //     const user = data[0];
    //     if (
    //       user.email === this.loginForm.account &&
    //       user.password === this.loginForm.password
    //     ) {
    //       console.log(user.email, this.loginForm.account);
    //     } else {
    //       console.log(user.email, this.loginForm.account);
    //       console.log(user.password, this.loginForm.password);
    //     }
    //   }
    // },
    // global context from $store
    LoginSuccessful() {
      this.$store.dispatch("UserLogin");
    },
  },
};
</script>

<style lang="scss" scoped>
#Login {
  .LoginForm {
    background-color: #fff;
    width: 600px;
    border: 5px double black;
    border-radius: 10px;
    padding: 50px;
    h1 {
      margin-bottom: 20px;
    }
    .input {
      font-size: 100px;
    }
  }
}
</style>