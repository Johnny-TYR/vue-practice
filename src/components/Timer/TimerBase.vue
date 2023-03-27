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
      runClock: null,
      hour: 0,
      min: 0,
      sec: 0,
      runClockInterval: null,
    };
  },
  computed: {
    displayTime() {
      let displayHour = this.hour < 10 ? `0${this.hour}` : this.hour;
      let displayMin = this.hour < 10 ? `0${this.min}` : this.min;
      let displaySec = this.sec < 10 ? `0${this.sec}` : this.sec;
      return `${displayHour} : ${displayMin} : ${displaySec}`;
    },
  },
  methods: {
    // 開始計時器
    StartTimer() {
      this.$Message.success("Start");
    },
    // 停止計時器
    StopTimer() {
      this.$Message.error("StopTimer");
    },
    // 歸零計時器
    ResetTimer() {
      this.$Message.info("ResetTimer");
      clearInterval(this.runClockInterval);
      this.hour = 0;
      this.min = 0;
      this.sec = 0;
    },
    // 設定計時的
    Interval(){
      
    }
  },
};
</script>

<style lang="scss" scoped>
#TimerBase {
  .TimerBase {
    outline: auto;
  }
}
#TimerBase {
}
</style>