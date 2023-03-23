<template lang="pug">
#FormTodo
  Form.FormTodo(
    ref="formTodo",
    :model="formTodo",
    :rules="ruleTodo",
    :label-width="80"
  )
    FormItem(v-for="(item, index) in formTodo.items")
    FormItem
      Button(type="primary", @click="HandleSubmit") {{ "Submit" }}
      Button(@click="HandleReset") {{ "Reset" }}
</template>

<script>
export default {
  data() {
    return {
      index: 1,
      formTodo: {
        items: [{ value: "", index: 1, status: 1 }],
      },
      ruleTodo: {
        content: [{ required: true, message: "Enter content please", trigger: "blur" },],
      },
    };
  },
  methods: {
    HandleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("成功新增");
        }
        this.$Message.error("新增失敗");
      });
    },
    HandleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
#FormTodo {
  .FormTodo {
    background-color: lightblue;
    padding: 50px;
    margin: 50px;
    width: 500px;
    border: 1px solid black;
    border-radius: 5px;
  }
}
</style>