<template lang="pug">
#iViewForm
  h1 {{ "iView Form" }}
  Form.iViewForm
    FormItem(prop="user")
      Input(type="text")
        Icon(type="ios-person-outline" slot="prepend")
    FormItem(prop="password")
      Input(type="password")
    FormItem
      Button(type="primary")
</template>


<script>
export default {
  name: "form",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#iViewForm {
  .iViewForm {
    padding: 50px;
    width: 500px;
    border: 1px solid black;
  }
}
</style>