<template lang="pug">
#ToDoListView
    h1 {{ "drag and drop" }}
    DragDrop
</template>

<script>
export default {
  name: "ToDoListView",
  components: {
    DragDrop: () => import("@/components/Transitions/DragDrop.vue"),
  },
};
</script>

<style lang="scss" scoped>
#ToDoListView {
}
</style>