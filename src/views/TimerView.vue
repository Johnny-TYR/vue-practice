<template lang="pug">
#TimerView
  TimerBase
  CountDown
</template>

<script>
export default {
  name: "TimerView",
  components: {
    TimerBase: () => import("@/components/Timer/TimerBase.vue"),
    CountDown: () => import("@/components/Timer/CountDown.vue"),
  },
};
</script>