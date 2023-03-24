<template lang="pug">
#HomeView
  Form.registerForm(
    ref="registerForm",
    :model="registerForm",
    :label-width="80",
    label-position="left",
    :rules="registerRules"
  )
    h1 {{ "Register" }}
    .input-area
      FormItem(label="Account", prop="account")
        Input(
          type="email",
          v-model="registerForm.account",
          placeholder="Enter email"
        )
          Icon(type="ios-contact", slot="prepend")
      FormItem(label="Password", prop="password")
        Input(
          type="password",
          v-model="registerForm.password",
          placeholder="Enter password"
        )
          Icon(type="ios-lock", slot="prepend")
      FormItem(label="Confirm Password", prop="checkPwd")
        Input(
          type="password",
          placeholder="Confirm password",
          v-model="registerForm.checkPwd"
        )
          Icon(type="md-checkmark", slot="prepend")
    FormItem(prop="agree")
      Checkbox(v-model="registerForm.agree") {{ "I agree to the terms and agreements" }}
    FormItem
      Checkbox(v-model="registerForm.subscribe") {{ "Subscribe to Vue practice" }}
    FormItem
      Button(type="primary", @click="HandleSubmit('registerForm')") {{ "Register" }}
      Button(type="error", @click="HandleClear('registerForm')") {{ "Clear Form" }}
  pre {{ registerForm }}
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
      return callback();
    };
    // 確認密碼為 6 位數
    const validatePw = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("必須填密碼"));
      }
      if (value.length < 6) {
        return callback(new Error("密碼至少要6個字元"));
      }
      return callback();
    };
    // 確認密碼有沒有相同
    const validateCheckPwd = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("請確認密碼"));
      }
      if (value !== this.registerForm.password) {
        return callback(new Error("密碼不相符"));
      }
      return callback();
    };
    // 確認框框有沒有勾選
    const validateAgree = (rule, value, callback) => {
      // console.log(value);
      if (value !== true) {
        callback(new Error("勾選同意"));
      } else {
        callback();
      }
    };

    return {
      registerForm: {
        account: "",
        password: "",
        checkPwd: "",
        agree: false,
        subscribe: false,
      },
      // custom auth ====================================================================
      registerRules: {
        account: [
          { validator: validateAcc, trigger: "blur" },
          { type: "email", message: "Email 格式不符", trigger: "blur" },
        ],
        password: [{ validator: validatePw, trigger: "blur" }],
        checkPwd: [{ validator: validateCheckPwd, trigger: "blur" }],
        agree: [{ validator: validateAgree, trigger: "blur" }],
      },
    };
  },
  methods: {
    HandleSubmit(refName) {
      this.$refs[refName].validate((valid) => {
        if (valid) {
          localStorage.setItem("email", this.registerForm.account);
          localStorage.setItem("email", this.registerForm.account);
          return this.$Message.success("註冊成功");
        }
        return this.$Message.error("註冊失敗");
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
  .registerForm {
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