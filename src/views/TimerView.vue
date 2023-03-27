<template lang="pug">
#TimerView
  TimerBase
</template>

<script>
export default {
  name: "TimerView",
  components: {
    TimerBase: () => import("@/components/Timer/TimerBase.vue"),
  },
};
</script>