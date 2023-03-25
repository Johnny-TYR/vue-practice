<template lang="pug">
#TodoListView
  TodoList1
</template>

<script>
export default {
  components: {
    TodoList1: () => import("@/components/TodoList/TodoList1.vue"),
  },
};
</script>