<template lang="pug">
#TimerBase
  .TimerBase
    h1 {{ time }}
    .btnContainer
      Button(@click="start") {{ "start" }}
      Button(@click="stop") {{ "stop" }}
      Button(@click="reset") {{ "reset" }}
</template>

<script>
export default {
  name: "TimerBase",
  data() {
    return {
      time: 0,
      runClock: null,
    };
  },

  methods: {
    start() {
      this.$Message.success("Start");
      this.runClock = setInterval(() => {
        this.time++;
      }, 1000);
    },
    stop() {
      this.$Message.error("stop");
      clearInterval(this.runClock)
    },
    reset() {
      this.$Message.info("reset");
      this.time = 0
    },
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