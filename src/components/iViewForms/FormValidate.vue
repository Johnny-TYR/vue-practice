<template lang="pug">
#FormValidate
  Form.FormValidate(
    ref="formValidate",
    v-model="formValidate",
    :rules="ruleValidate"
  )
    FormItem(label="Name" prop="name")
      Input(v-model="formValidate.name", placeholder="Enter name here")
</template>

<script>
export default {
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
        city: "",
        gender: "",
        interest: [],
        date: "",
        time: "",
        desc: "",
      },
      ruleValidate: {
        name: [
          { required: true, message: "Name cannot be empty", trigger: "blur" },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#FormValidate {
  .FormValidate {
    background-color: lightblue;
    padding: 50px;
    margin: 50px;
    width: 500px;
    border: 1px solid black;
    border-radius: 5px;
  }
}
</style>