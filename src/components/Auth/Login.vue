<template lang="pug">
#Login
  Form.LoginForm(
    ref="LoginForm",
    :model="LoginForm",
    :label-width="80",
    label-position="left"
  )
    h1 {{ "Login" }}
    .input-area
      FormItem(label="Account")
        Input(type="email")
          Icon(type="ios-contact", slot="prepend")
      FormItem(label="Password")
        Input(type="password")
          Icon(type="ios-lock", slot="prepend")
</template>

<script>
export default {
  data() {
    return {
      LoginForm: {
      },
    };
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