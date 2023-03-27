<template lang="pug">
#CountDown
  .CountDown
    h1 {{ displayTime }}
    .btnContainer
      Button(@click="HandleStart") {{ "Start Countdown" }}
      Button(@click="HandleStop") {{ "Stop Countdown" }}
      Button(@click="HandleReset") {{ "Reset Countdown" }}
    TimePicker
</template>

<script>
export default {
  name: "CountDown",
  data() {
    return {
      hour: 0,
      min: 0,
      sec: 0,
      intervalStatus: null,
    };
  },
  computed: {
    displayTime() {
      let displayHour = this.hour < 10 ? `0${this.hour}` : this.hour;
      let displayMin = this.min < 10 ? `0${this.min}` : this.min;
      let displaySec = this.sec < 10 ? `0${this.sec}` : this.sec;
      return `${displayHour} : ${displayMin} : ${displaySec}`;
    },
  },
  methods: {
    // 開始倒數
    HandleStart() {
      this.$Message.success("Start Countdown");
      if (this.intervalStatus !== null) {
        clearInterval(this.intervalStatus);
      }
      this.intervalStatus = setInterval(this.Counter, 10);
    },
    // 暫停倒數
    HandleStop() {
      this.$Message.error("Stop Countdown");
      clearInterval(this.intervalStatus);
    },
    // 歸零
    HandleReset() {
      this.$Message.info("Reset Countdown");
      clearInterval(this.intervalStatus);
      this.hour = 0;
      this.min = 0;
      this.sec = 0;
    },
    // interval 的 function
    Counter() {
      this.sec--;
      if (this.hour === 0 && this.min === 0 && this.sec === 0) {
        clearInterval(this.intervalStatus);
        this.$Message.success("Timer ended");
      }
      if (this.sec < 0) {
        this.min--;
        this.sec = 59;
      }
      if (this.min < 0) {
        this.hour--;
        this.min = 59;
      }
      if (this.hour < 0) {
        this.hour = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#CountDown {
  .CountDown {
    width: 500px;
    border: 1px solid black;
    padding: 50px;
    @extend .center;
    flex-direction: column;
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>