<template lang="pug">
#HomeView
  Form.LoginForm(
    ref="loginForm",
    :model="loginForm",
    :label-width="80",
    label-position="left",
    :rules="loginRules"
  )
    h1 {{ "Login" }}
    .input-area
      FormItem(label="Account", prop="account")
        Input(
          type="email",
          v-model="loginForm.account",
          placeholder="Enter email"
        )
          Icon(type="ios-contact", slot="prepend")
      FormItem(label="Password", prop="password")
        Input(
          type="password",
          v-model="loginForm.password",
          placeholder="Enter password"
        )
          Icon(type="ios-lock", slot="prepend")
    FormItem
      CheckboxGroup
        Checkbox(v-model="loginForm.agree") {{ "I agree to the terms and agreements" }}
        Checkbox(v-model="loginForm.subscribe") {{ "Subscribe to Vue practice" }}
    FormItem
      Button(type="primary", @click="HandleSubmit('loginForm')") {{ "Login" }}
      Button(type="error", @click="HandleClear('loginForm')") {{ "Clear Form" }}
  pre {{ loginForm }}
</template>

<script>
export default {
  refName: "HomeView",
  components: {},
  data() {
    // 確認帳戶名稱
    const validateAcc = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("必須填帳戶"));
      }
      if (value !== "123@gmail.com") {
        return callback(new Error("帳號錯誤"));
      }
      return callback();
    };
    // 確認密碼為 6 位數
    const validatePw = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("必須填密碼"));
      }
      if (value !== "123456") {
        return callback(new Error("密碼錯誤"));
      }
      return callback();
    };
    // 確認框框有沒有勾選
    const validateAgree = (rule, value, callback) => {
      if (value !== true) {
        callback(new Error("勾選同意"));
      } else {
        callback();
      }
    };

    return {
      loginForm: {
        account: "",
        password: "",
        agree: false,
        subscribe: false,
      },
      // custom auth ====================================================================
      loginRules: {
        account: [{ validator: validateAcc, trigger: "change" }],
        password: [{ validator: validatePw, trigger: "change" }],
        agree: [{ validator: validateAgree, trigger: "change" }],
      },
    };
  },
  methods: {
    HandleSubmit(refName) {
      this.$refs[refName].validate((valid) => {
        if (valid) {
          this.$Message.success("登入成功");
        } else {
          this.$Message.error("登入失敗");
        }
      });
    },
    HandleClear(refName) {
      this.$refs[refName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
#HomeView {
  height: 100vh;
  @extend .center;
  background-color: #42b983;
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
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>