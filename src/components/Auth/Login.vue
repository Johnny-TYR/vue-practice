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
      return callback();
    };
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("請輸入密碼"));
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
  methods: {
    HandleSubmit(refName) {
      this.$refs[refName].validate((valid) => {
        if (valid) {
          this.LoginSuccessful();
          return this.$Message.success("登入成功");
        }
        return this.$Message.error("登入失敗");
      });
    },
    HandleClear(refName) {
      this.$refs[refName].resetFields();
    },
    // grab all user data from localStorage and store in data
    GetUserList() {
      const data = JSON.parse(localStorage.getItem("userList"));
      console.log(data);
    },
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