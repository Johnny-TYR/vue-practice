<template lang="pug">
#TimerView
  TimerBase
  CountDown
  FlipCard(:startNum="startNum")
  Button(@click="StartCount") {{ "Click" }}
</template>

<script>
export default {
  name: "TimerView",
  data() {
    return {
      startNum: 0,
      interval: null,
    };
  },
  methods: {
    StartCount() {
      setInterval(() => {
        if (this.startNum + 1 === 10) {
          this.startNum = 0;
        } else {
          this.startNum++;
        }
      }, 1000);
    },
  },
  components: {
    TimerBase: () => import("@/components/Timer/TimerBase.vue"),
    CountDown: () => import("@/components/Timer/CountDown.vue"),
    FlipCard: () => import("@/components/Timer/FlipCard.vue"),
  },
};
</script>