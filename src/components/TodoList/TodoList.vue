<template lang="pug">
#TodoList
  .todo-container
    h1 {{ "Todo List" }}
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      test: "qweadfkjahsldkfjhae"
    }
  },
  computed: {
    todoList() {
      this.$store.state.todoList
    }
  }
}
</script>