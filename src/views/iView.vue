<template>
  <div>
    <div class="timerDisplay">{{ display }}</div>
    <button @click="startTimer">Start</button>
    <button @click="pauseTimer">Pause</button>
    <button @click="resetTimer">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      interval: null,
    };
  },
  computed: {
    display() {
      let h = this.hours < 10 ? "0" + this.hours : this.hours;
      let m = this.minutes < 10 ? "0" + this.minutes : this.minutes;
      let s = this.seconds < 10 ? "0" + this.seconds : this.seconds;
      let ms =
        this.milliseconds < 10
          ? "00" + this.milliseconds
          : this.milliseconds < 100
          ? "0" + this.milliseconds
          : this.milliseconds;
      return `${h} : ${m} : ${s} : ${ms}`;
    },
  },
  methods: {
    startTimer() {
      if (this.interval !== null) {
        clearInterval(this.interval);
      }
      this.interval = setInterval(this.displayTimer, 10);
    },
    pauseTimer() {
      clearInterval(this.interval);
    },
    resetTimer() {
      clearInterval(this.interval);
      this.milliseconds = 0;
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
    },
    displayTimer() {
      this.milliseconds += 10;
      if (this.milliseconds == 1000) {
        this.milliseconds = 0;
        this.seconds++;
        if (this.seconds == 60) {
          this.seconds = 0;
          this.minutes++;
          if (this.minutes == 60) {
            this.minutes = 0;
            this.hours++;
          }
        }
      }
    },
  },
};
</script>
