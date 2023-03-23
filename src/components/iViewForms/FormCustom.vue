<template lang="pug">
#FormCustom
  Form.FormCustom(
    ref="formCustom",
    :model="formCustom",
    :rules="ruleCustom",
    label-width="80"
  )
    FormItem(label="Password", prop="passwd")
      Input(type="password", v-model="formCustom.passwd")
    FormItem(label="Confirm Pwd", prop="passwdCheck")
      Input(type="password", v-model="formCustom.passwdCheck")
    FormItem(label="Age", prop="age")
      Input(type="text", v-model="formCustom.age", number)
    FormItem
      Button(type="primary", @click="handleSubmit('formCustom')") {{ "Submit" }}
      Button(style="margin-left: 8px", @click="handleReset('formCustom')") {{ "Reset" }}
</template>

<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    };
    const validateAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Age cannot be empty"));
      }
      // 模拟异步验证效果
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("Please enter a numeric value"));
        } else {
          if (value < 18) {
            callback(new Error("Must be over 18 years of age"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      formCustom: {
        passwd: "",
        passwdCheck: "",
        age: "",
      },
      ruleCustom: {
        passwd: [{ validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }],
        age: [{ validator: validateAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success");
        } else {
          this.$Message.error("Failed");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>


<style lang="scss" scoped>
#FormCustom {
  .FormCustom {
    background-color: lightblue;
    padding: 50px;
    margin: 50px;
    width: 500px;
    border: 1px solid black;
    border-radius: 5px;
  }
}
</style>