<template lang="pug">
#Base
  .carousel-base
    transition-group.carousel-container(tag="div", :name="transitionName")
      .carousel-box(
        v-for="(img, index) of imgList",
        :key="img.id",
        v-show="index === show"
      )
        img(:src="img.src")
    Button.btn-left(@click="HandleLeft") {{ "Left" }}
    Button.btn-right(@click="HandleRight") {{ "Right" }}
  Button(v-for="(num, index) in imgList", key="num", @click="setShow(index)") {{ index + 1 }}
  pre {{ show }}
</template>

<script>
export default {
  name: "Base",
  props: {
    imgList: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      transitionName: "",
      show: 0,
    };
  },
  // 自動輪播
  mounted() {
    setInterval(this.HandleLeft(), 1000);
  },
  methods: {
    HandleLeft() {
      this.transitionName = "left-in";
      if (this.show < 1) {
        this.show = this.imgList.length;
      }
      this.show--;
    },
    HandleRight() {
      this.transitionName = "right-in";
      if (this.show >= this.imgList.length - 1) {
        this.show = 0;
        return;
      }
      this.show++;
    },
    setShow(index) {
      this.transitionName = index > this.show ? "right-in" : "left-in";
      this.show = index;
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
    position: relative;
    overflow: hidden;
    .carousel-box {
      position: absolute;
      width: 1000px;
      height: 600px;
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
    // transition 一定有六個階段，enter 跟 leave 各三個 ========================
    .right-in-enter {
      // 從左邊的 100% 進來
      left: 100%;
    }
    .right-in-enter-active,
    .right-in-leave-active {
      transition: left 0.8s ease-in-out;
    }
    .right-in-enter-to,
    .right-in-leave {
      left: 0%;
    }
    .right-in-leave-to {
      left: -100%;
    }
    // ==================
    .left-in-enter {
      // 從左邊的 100% 進來
      left: -100%;
    }
    .left-in-enter-active,
    .left-in-leave-active {
      transition: left 0.8s ease-in-out;
    }
    .left-in-enter-to,
    .left-in-leave {
      left: 0%;
    }
    .left-in-leave-to {
      left: 100%;
    }
    // =====================================================================
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>