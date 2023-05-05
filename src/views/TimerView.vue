<template lang="pug">
#TimerView
  TimerBase
  CountDown

  #clock
    //- img.bg-img(src="/imgs/space-bg.jpeg")
    Clock
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
    Clock: () => import("@/components/Clock/Clock.vue")
  },
};
</script>

<style lang="scss" scoped>
#TimerView {
  Button {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  #clock {
    background-image: url("/public/imgs/stars.jpeg");
    height: 100vh;
    @extend .center;
  }

}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>