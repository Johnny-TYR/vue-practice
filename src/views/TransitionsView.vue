<template lang="pug">
#TransitionsView
  .div
    h1 {{ "transition" }}
    TransitionPractice
    h1 {{ "transition-group" }}
    TransitionGroup
</template>

<script>
export default {
  name: "TransitionsView",
  components: {
    TransitionPractice: () =>
      import("@/components/Transitions/TransitionPractice.vue"),
    TransitionGroup: () =>
      import("@/components/Transitions/TransitionGroup.vue"),
  },
};
</script>

<style lang="scss" scoped>
#TransitionsView {
  display: flex;
  gap: 100px;
}
</style>