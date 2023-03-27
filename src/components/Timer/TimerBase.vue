<template lang="pug">
#TimerBase
  .TimerBase
    h1 {{ displayTime }}
    .btnContainer
      Button(@click="StartTimer") {{ "StartTimer" }}
      Button(@click="StopTimer") {{ "StopTimer" }}
      Button(@click="ResetTimer") {{ "ResetTimer" }}
</template>

<script>
export default {
  name: "TimerBase",
  data() {
    return {
      hour: 0,
      min: 0,
      sec: 0,
      // 會在 runInterval 綁定 setInterval
      runInterval: null,
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
    // 開始計時器
    StartTimer() {
      this.$Message.success("Start");
      if (this.runInterval !== null) {
        clearInterval(this.runInterval);
      }
      this.runInterval = setInterval(this.Counter, 10);
    },
    // 停止計時器
    StopTimer() {
      this.$Message.error("StopTimer");
      clearInterval(this.runInterval);
    },
    // 歸零計時器
    ResetTimer() {
      this.$Message.info("ResetTimer");
      clearInterval(this.runInterval);
      this.hour = 0;
      this.min = 0;
      this.sec = 0;
    },
    // 設定計時的
    Counter() {
      this.sec++;
      if (this.sec === 60) {
        this.sec = 0;
        this.min++;
      }
      if (this.min === 60) {
        this.min = 0;
        this.hour++;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#TimerBase {
  .TimerBase {
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