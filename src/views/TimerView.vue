<template lang="pug">
#TimerView
  TimerBase
  CountDown
  FlipCard(:startNum="numbers.sec")
  FlipCard(:startNum="numbers.secTen")
  Button(@click="StartCount") {{ "Click" }}
</template>

<script>
export default {
  name: "TimerView",
  data() {
    return {
      numbers: {
        sec: 3,
        secTen: 4,
      },
      interval: null,
    };
  },
  methods: {
    StartCount() {
      setInterval(() => {
        if (this.numbers.sec + 1 === 10) {
          this.numbers.sec = 0;
          this.numbers.secTen++
          return;
        }
        this.numbers.sec++;
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

<style lang="scss" scoped>
#TimerView {
  Button {
    margin-top: 100px;
    margin-bottom: 100px;
  }
}
</style>