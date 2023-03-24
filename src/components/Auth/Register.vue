<template lang="pug">
#Register
  Form.registerForm(
    ref="registerForm",
    :model="registerForm",
    :rules="registerRules",
    :label-width="80",
    label-position="left"
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
    p {{ users }}
//-   pre {{ isLoggedIn }}
</template>

<script>
export default {
  data() {
    // 確認帳戶名稱 ==========================================================
    const validateAcc = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("必須填帳戶"));
      }
      return callback();
    };
    // 確認密碼為 6 位數 =====================================================
    const validatePw = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("必須填密碼"));
      }
      if (value.length < 6) {
        return callback(new Error("密碼至少要6個字元"));
      }
      return callback();
    };
    // 確認密碼有沒有相同 ====================================================
    const validateCheckPwd = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("請確認密碼"));
      }
      if (value !== this.registerForm.password) {
        return callback(new Error("密碼不相符"));
      }
      return callback();
    };
    // 確認框框有沒有勾選 ===================================================
    const validateAgree = (rule, value, callback) => {
      // console.log(value);
      if (value !== true) {
        return callback(new Error("勾選同意"));
      }
      return callback();
    };

    return {
      // 表單要使用的資料 =======================================================
      registerForm: {
        account: "",
        password: "",
        checkPwd: "",
        agree: false,
        subscribe: false,
      },
      // custom auth =========================================================
      registerRules: {
        account: [
          { validator: validateAcc, trigger: "change" },
          { type: "email", message: "Email 格式不符", trigger: "change" },
        ],
        password: [{ validator: validatePw, trigger: "change" }],
        checkPwd: [{ validator: validateCheckPwd, trigger: "change" }],
        agree: [{ validator: validateAgree, trigger: "change" }],
      },
      // 已註冊帳戶 ===========================================================
      users: [
        { email: "1@gmail.com", password: 123456 },
        { email: "2@gmail.com", password: 123456 },
        { email: "3@gmail.com", password: 123456 },
        { email: "4@gmail.com", password: 123456 },
        { email: "5@gmail.com", password: 123456 },
      ],
    };
  },
  methods: {
    HandleSubmit(refName) {
      this.$refs[refName].validate((valid) => {
        if (valid) {
          let existingUser = false;
          this.users.forEach((user) => {
            if (user.email === this.registerForm.account) {
              existingUser = true;
            }
          });
          if (existingUser) {
            return this.$Message.error("Email已被註冊");
          }
          this.RegisterUser();
          return this.$Message.success("註冊成功");
        }
        return this.$Message.error("註冊失敗");
      });
    },
    HandleClear(refName) {
      this.$refs[refName].resetFields();
    },
    RegisterUser() {
      this.users.push({
        email: this.registerForm.account,
        password: this.registerForm.password,
      });
      this.showr
      localStorage.setItem("userList", JSON.stringify(this.users));
    },
  },
};
</script>

<style lang="scss" scoped>
#Register {
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
</style>