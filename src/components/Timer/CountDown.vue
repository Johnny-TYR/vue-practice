<template lang="pug">
#CountDown
  .CountDown
    h1 {{ displayTime }}
    .btnContainer
      Button(@click="HandleStart") {{ "Start Countdown" }}
      Button(@click="HandleStop", v-if="isRunning") {{ "Stop Countdown" }}
      Button(@click="HandleClear") {{ "Clear Countdown" }}
    .inputContainer(v-if="!isRunning")
      Select(v-model="time.hour", placeholder="時")
        Option(v-for="i of hourList", :value="i", :key="i") {{ i }}
      Select(v-model="time.min", placeholder="分")
        Option(v-for="i of 59", :value="i", :key="i") {{ i }}
      Select(v-model="time.sec", placeholder="秒")
        Option(v-for="i of 59", :value="i", :key="i") {{ i }}
</template>

<script>
export default {
  name: "CountDown",
  data() {
    return {
      time: {
        hour: 0,
        min: 0,
        sec: 0,
      },
      intervalStatus: null,
      isRunning: false,
      hourList:[0,1,2,3,4,5,6,7,8,9,10,11,12]
    };
  },
  computed: {
    displayTime() {
      return this.GetDisplayTime();
    },
  },
  methods: {
    // 把顯示
    GetDisplayTime() {
      let displayHr =
        this.time.hour < 10 ? `0${this.time.hour}` : this.time.hour;
      let displayMin = this.time.min < 10 ? `0${this.time.min}` : this.time.min;
      let displaySec = this.time.sec < 10 ? `0${this.time.sec}` : this.time.sec;
      return `${displayHr} : ${displayMin} : ${displaySec}`;
    },
    // 開始倒數
    HandleStart() {
      if (this.time.hour === 0 && this.time.min === 0 && this.time.sec === 0) {
        this.$Message.error("請選擇時間");
        this.isRunning = false;
        return;
      }
      this.$Message.success("Start Countdown");
      this.isRunning = true;
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
    HandleClear() {
      this.$Message.info("Reset Countdown");
      this.isRunning = false;
      this.time.hour = 0;
      this.time.min = 0;
      this.time.sec = 0;
      clearInterval(this.intervalStatus);
    },
    // interval 的 function
    Counter() {
      this.time.sec--;
      if (this.time.hour === 0 && this.time.min === 0 && this.time.sec === 0) {
        clearInterval(this.intervalStatus);
        this.$Message.success("Timer ended");
        this.isRunning = false;
        return;
      }
      if (this.time.sec < 0) {
        this.time.min--;
        this.time.sec = 59;
        return;
      }
      if (this.time.min < 0) {
        this.time.hour--;
        this.time.min = 59;
        return;
      }
      if (this.time.hour < 0) {
        this.time.hour = 0;
        return;
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
    .inputContainer {
      display: flex;
    }
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>