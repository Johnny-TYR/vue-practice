<template lang="pug">
#ToDoListView
  .dragDrop
    h1 {{ "Drag and drop" }}
    DragDrop
  .todoList
    h1 {{ "Todo List" }}
    TodoList
</template>

<script>
export default {
  name: "ToDoListView",
  components: {
    DragDrop: () => import("@/components/Transitions/DragDrop.vue"),
    TodoList: () => import("@/components/TodoList/TodoList.vue")
  },
};
</script>

<style lang="scss" scoped>
// 排版
#ToDoListView {
  width: 100%;
  display: flex;
  gap: 300px;
}
</style>