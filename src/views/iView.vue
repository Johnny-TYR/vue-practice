<template>
  <div>
    <div id="clock">{{ time }}</div>
    <button @click="start">Start</button>
    <button @click="stop">Stop</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "00:00:00.000",
      timeBegan: null,
      timeStopped: null,
      stoppedDuration: 0,
      started: null,
      running: false,
    };
  },
  methods: {
    start() {
      if (this.running) return;

      if (this.timeBegan === null) {
        this.reset();
        this.timeBegan = new Date();
      }

      if (this.timeStopped !== null) {
        this.stoppedDuration += new Date() - this.timeStopped;
      }

      this.started = setInterval(this.clockRunning, 10);
      this.running = true;
    },
    stop() {
      this.running = false;
      this.timeStopped = new Date();
      clearInterval(this.started);
    },
    reset() {
      this.running = false;
      clearInterval(this.started);
      this.stoppedDuration = 0;
      this.timeBegan = null;
      this.timeStopped = null;
      this.time = "00:00:00.000";
    },
    clockRunning() {
      const currentTime = new Date();
      const timeElapsed = new Date(
        currentTime - this.timeBegan - this.stoppedDuration
      );
      const hour = timeElapsed.getUTCHours();
      const min = timeElapsed.getUTCMinutes();
      const sec = timeElapsed.getUTCSeconds();
      const ms = timeElapsed.getUTCMilliseconds();

      this.time =
        zeroPrefix(hour, 2) +
        ":" +
        zeroPrefix(min, 2) +
        ":" +
        zeroPrefix(sec, 2) +
        "." +
        zeroPrefix(ms, 3);
    },
  },
};

function zeroPrefix(num, digit) {
  let zero = "";
  for (let i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
}
</script>
