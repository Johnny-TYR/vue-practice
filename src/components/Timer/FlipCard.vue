<template lang="pug">
#FlipCard
  .flip-card.flip
    .top(ref="og-top") {{ newNum }}
    .bottom(ref="og-bot") {{ startNum }}
    .top-flip(ref="flip-top", v-if="isCounting") {{ startNum }}
    .bottom-flip(ref="flip-bot", v-if="isCounting") {{ newNum }}
    //- top-flip 跟 bottom 原數字一開始是舊數字，top-flip 完要變新數字
    //- top 一開始就是新數字
    //- -> bottom-flip 新數字結束後 bottom 要變新數字
  Button(type="primary", @click="ToggleCount") {{ "toggle countdown" }}
</template>
<script>
export default {
  data() {
    return {
      isCounting: false,
      startNum: 9,
      newNum: 8,
    };
  },
  methods: {
    ToggleCount() {
      this.isCounting = !this.isCounting;
      this.startNum--;
      this.newNum--;
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
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    position: relative;
    // decoration only
    font-size: 25rem;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    // divide into two halves ======================================================================
    .top {
      background-color: whitesmoke;
      @extend .top-border;
    }
    .bottom {
      background-color: white;
      display: flex;
      align-items: flex-end;
      @extend .bottom-border;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
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
    background-color: whitesmoke;
    background: darkcyan;
    @extend .top-border;
    animation: flip-top 1000ms ease-in;
    transform-origin: bottom;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    animation-iteration-count: infinite;
  }
  @keyframes flip-top {
    // 50% {
    //   transform: rotateX(90deg);
    // }
    100% {
      transform: rotateX(90deg);
    }
  }
  // bottom animation ********************
  .bottom-flip {
    position: absolute;
    bottom: 0;
    color: black;
    background: lightblue;
    display: flex;
    align-items: flex-end;
    width: 100%;
    @extend .bottom-border;
    animation: flip-bottom 1000ms ease-out;
    transform-origin: top;
    transform: rotateX(90deg);
    animation-delay: 1000ms;
    animation-iteration-count: infinite;
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