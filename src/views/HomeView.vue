<template lang="pug">
#HomeView
  Form.LoginForm(
    ref="loginForm",
    :model="loginForm",
    :label-width="80",
    label-position="left"
  )
    h1 {{ "Login" }}
    FormItem(label="Account")
      Input(
        type="email",
        v-model="loginForm.account",
        placeholder="Enter email"
      )
        Icon(type="ios-contact", slot="prepend")
    FormItem(label="Password")
      Input(
        type="password",
        v-model="loginForm.password",
        placeholder="Enter password"
      )
        Icon(type="ios-lock", slot="prepend")
    FormItem
      Checkbox(v-model="loginForm.agree") {{ "I agree to the terms and agreements" }}
    FormItem
      Button(type="primary", @click="HandleSubmit('loginForm')") {{ "Login" }}
      Button(type="error", @click="HandleReset('loginForm')") {{ "Reset" }}
  pre {{ loginForm }}
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      loginForm: {
        account: "",
        password: "",
        agree: false,
      },
    };
  },
  methods: {
    HandleSubmit(refName) {
      this.$refs[refName].validate((valid) => {
        if (valid) {
          this.$Message.success("Success");
        } else {
          this.$Message.error("Failed");
        }
      });
    },
    HandleReset(name) {
      this.$refs[name].resetFields();
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
#HomeView {
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
