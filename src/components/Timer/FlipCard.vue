<template lang="pug">
#FlipCard
  .flip-card
    .top(ref="top") {{ startNum }}
    .bottom(ref="bottom") {{ startNum }}
    .animateTop(ref="animateTop", v-if="isCounting") {{ startNum }}
    .animateBot(ref="animateBot", v-if="isCounting") {{ startNum }}
</template>
<script>
export default {
  props: {
    startNum: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isCounting: false,
    };
  },
  watch: {
    startNum() {
      this.ToggleCount();
    },
  },
  methods: {
    ToggleCount() {
      this.isCounting = true;
      // $nextTick => defer the execution of a function until the next tick of the event loop, waits for vue to update the component
      this.$nextTick(() => {
        this.$refs.animateTop.classList.add("top-flip");
        this.$refs.animateBot.classList.add("bottom-flip");
        setTimeout(() => {
          this.$refs.animateTop.classList.remove("top-flip");
          this.$refs.animateBot.classList.remove("bottom-flip");
          this.isCounting = false;
        }, 800); // 幾秒後移除動畫
      });
    },
  },
};
</script>


<style lang="scss" scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
}
#FlipCard {
  // 佈局 CSS
  .flip-card {
    color: black;
    display: inline-flex;
    flex-direction: column;
    border-radius: 0.1em;
    box-shadow: 0px 2px 29px rgba(0, 0, 0, 3);
    position: relative;
    // decoration only
    font-size: 20rem;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    overflow: hidden;
    // divide into two halves ======================================================================
    .top {
      background-color: #f7f7f7;
      @extend .top-border;
      border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    }
    .bottom {
      background-color: white;
      display: flex;
      align-items: flex-end;
      @extend .bottom-border;
      border-top: 2px solid rgba(0, 0, 0, 0.1);
    }
    .top,
    .bottom {
      height: 0.75em;
      padding: 0.25em;
      line-height: 1;
      overflow: hidden;
    }
  }
  // 動畫個別的 flap，一個上到中，一個中到下 ============================================================
  .bottom-flip,
  .top-flip {
    height: 0.75em;
    padding: 0.25em;
    line-height: 1;
    overflow: hidden;
    width: 100%;
  }
  // top animation ********************
  .top-flip {
    position: absolute;
    width: 100%;
    background-color: #f7f7f7;
    background-color: red;
    @extend .top-border;
    animation: flip-top 400ms ease-in;
    transform-origin: bottom;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }
  @keyframes flip-top {
    100% {
      transform: rotateX(90deg);
    }
  }
  // bottom animation ********************
  .bottom-flip {
    position: absolute;
    bottom: 0;
    color: black;
    background-color: white;
    background-color: blue;
    display: flex;
    align-items: flex-end;
    width: 100%;
    @extend .bottom-border;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    animation: flip-bottom 400ms ease-out;
    transform-origin: top;
    transform: rotateX(90deg);
    animation-delay: 400ms;
  }
  @keyframes flip-bottom {
    100% {
      transform: rotateX(0deg);
    }
  }
}
// ==========================================================================================
// 角的弧度
.top-border {
  border-top-right-radius: 0.1em;
  border-top-left-radius: 0.1em;
}
.bottom-border {
  border-bottom-right-radius: 0.1em;
  border-bottom-left-radius: 0.1em;
}
</style>