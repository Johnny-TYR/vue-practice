<template lang="pug">
#CustomForm
  h1 {{ "Custom Form" }}
  form.authForm
    label {{ "Email" }}
    input(type="email")
    label {{ "Password" }}
    input(type="password")
    button(type="submit") {{ "Submit Form" }}
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
#CustomForm {
  .authForm {
    display: flex;
    flex-direction: column;
    padding: 50px;
    width: 500px;
    border: 1px solid black;
  }
}
</style>