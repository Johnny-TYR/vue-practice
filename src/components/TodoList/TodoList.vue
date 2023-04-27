<template lang="pug">
#TodoList
  .todo-container
    h1 {{ "Todo List" }}
    TodoItem
</template>

<script>
export default {
  name: "TodoList",
  components: {
    TodoItem: () => import("@/components/TodoList/TodoItem.vue")
  },
  data() {
    return {

    }
  }
}
</script>