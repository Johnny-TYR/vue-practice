<template lang="pug">
#Base
  .carousel-base
    transition-group.carousel-container(tag="div", :name="transitionName")
      .carousel-box(
        v-for="(img, index) of imgList",
        :key="index",
        v-show="index === show"
      )
        img(:src="img.src")
    Button.btn-left {{ "Left" }}
    Button.btn-right {{ "Right" }}
  pre {{ imgList }}
</template>

<script>
export default {
  name: "Base",
  props: {
    imgList: {
      type: Array,
      default: "",
    },
  },
  data() {
    return {
      transitionName: "right-in",
      show: 0,
    };
  },
  methods: {
    HandleLeft() {
      this.$Message.success("Click left");
      this.show--;
    },
    HandleRight() {
      this.$Message.success("Click right");
      this.show++;
    },
  },
};
</script>

<style lang="scss" scoped>
#Base {
  box-sizing: border-box;
  .carousel-base {
    width: 1000px;
    height: 600px;
    background-color: black;
    position: relative;
    overflow: hidden;
    // transition 一定有六個階段，enter 跟 leave 個三個 ==========
    .right-in-enter {
      // 從左邊的 100% 進來
      left: 100%;
    }
    .right-in-enter-active {
      transition: left 1s;
    }
    .right-in-enter-to {
      // 到 0%
      left: 0%;
    }
    .right-in-leave {
      left: 0%;
    }
    .right-in-leave-active {
      transition: left 1s;
    }
    .right-in-leave-to {
      left: -100%;
    }
    .carousel-box {
      position: absolute;
      width: 1000px;
      height: 600px;
      border: 1px solid black;
      background-color: lightgreen;
      @extend .center;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
    .btn-left {
      position: absolute;
      top: 0;
      left: 0;
    }
    .btn-right {
      position: absolute;
      top: 0;
      right: 0;
    }
    .btn-left,
    .btn-right {
      height: 100%;
      padding: 10px;
      border-radius: 0;
      @extend .center;
    }
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>