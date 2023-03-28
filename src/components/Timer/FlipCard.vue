<template lang="pug">
#FlipCard
  .flip-card.flip
    .top {{ "5" }}
    .bottom {{ "5" }}
</template>

<style lang="scss" scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
}
#FlipCard {
  // 佈局 CSS
  .flip-card {
    color: blue;
    font-size: 25rem;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    display: inline-flex;
    flex-direction: column;
    border-radius: 0.1em;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    position: relative;
    // divide into two halves
    .top {
      background-color: #f7f7f7;
      @extend .top-border;
      border-bottom: 3px solid rgba(0, 0, 0, 0.1);
    }
    .bottom {
      background-color: white;
      display: flex;
      align-items: flex-end;
      @extend .bottom-border;
    }
    .top,
    .bottom {
      height: 0.75em;
      padding: 0.25em;
      line-height: 1;
      overflow: hidden;
    }
    // make top half one animation, bottom half one animation using before/after
  }
  // 動畫個別的 flap，一個上到中，一個中到下
  .flip::after,
  .flip::before {
    height: 0.75em;
    padding: 0.25em;
    line-height: 1;
    overflow: hidden;
  }
  .flip::before {
    content: "5";
    position: absolute;
    color: black;
    background-color: red;
    width: 100%;
    @extend .top-border;
    animation: flip-top 1000ms ease-in;
    transform-origin: bottom;
  }

  @keyframes flip-top {
    100% {
      transform: rotateX(90deg);
    }
  }
  .flip::after {
  }
}

#FlipCard {
}

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