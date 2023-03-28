<template lang="pug">
#TimerView
  TimerBase
  CountDown
  FlipCard
</template>

<script>
export default {
  name: "TimerView",
  components: {
    TimerBase: () => import("@/components/Timer/TimerBase.vue"),
    CountDown: () => import("@/components/Timer/CountDown.vue"),
    FlipCard:()=>import("@/components/Timer/FlipCard.vue")
  },
};
</script>