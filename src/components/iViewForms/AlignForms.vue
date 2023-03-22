<template lang="pug">
#AlignForms
  Form.AlignForms(:model="formLeft", label-position="left", :label-width="100")
    FormItem(label="Title")
      Input(v-model="formLeft.input1")
    FormItem(label="Title name")
      Input(v-model="formLeft.input2")
    FormItem(label="Aligned Title")
      Input(v-model="formLeft.input3")

  Form.AlignForms(:model="formRight")

  Form.AlignForms(:model="formTop")
</template>

<script>
export default {
  data() {
    return {
      formLeft: {
        input1: "",
        input2: "",
        input3: "",
      },
      formRight: {
        input1: "",
        input2: "",
        input3: "",
      },
      formTop: {
        input1: "",
        input2: "",
        input3: "",
      },
    };
  },
};
</script>