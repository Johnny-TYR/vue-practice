<template lang="pug">
#Base(@mouseenter="PauseInterval", @mouseleave="StartInterval")
  .carousel-base
    transition-group.carousel-container(tag="div", :name="transitionName")
      .carousel-box(
        v-for="(img, index) of imgList",
        :key="img.src",
        v-show="index === show",
        @touchstart="HandleTouchStart",
        @touchmove="HandleTouchMove",
        @touchend="HandleTouchEnd"
      )
        img(:src="img.src")
    Button.btn-left(@click="HandleLeft", v-show="showButton")
      Icon(type="md-rewind", size="25")
    Button.btn-right(@click="HandleRight", v-show="showButton")
      Icon(type="md-fastforward", size="25")
  MiniPreview(:imgList="imgList")
  //- 小型輪播，可以拆出去
  //- .preview-container
  //-   .preview(
  //-     v-for="(img, index) in imgList",
  //-     :key="img.src",
  //-     @click="SetShow(index)"
  //-   )
  //-     img(:src="img.src")
</template>

<script>
export default {
  name: "Base",
  components: {
    MiniPreview: () => import("@/components/Carousel/MiniPreview.vue"),
  },
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
      mountedInterval: null,
      showButton: false,
      startX: null,
      endX: null,
    };
  },
  mounted() {
    this.StartInterval();
  },
  methods: {
    // 按左鍵，圖片從左邊出現
    HandleLeft() {
      this.transitionName = "left-in";
      if (this.show < 1) {
        this.show = this.imgList.length;
      }
      this.show--;
    },
    // 按右鍵，圖片從右邊出現
    HandleRight() {
      this.transitionName = "right-in";
      if (this.show >= this.imgList.length - 1) {
        this.show = 0;
        return;
      }
      this.show++;
    },
    // 按縮圖顯跟大張的對應並改變 transition 方式
    SetShow(index) {
      this.transitionName = index > this.show ? "right-in" : "left-in";
      this.show = index;
    },
    // 避免按按鈕跟 mounted 的 interval 衝突
    StartInterval() {
      this.$Message.success("start");
      this.showButton = false;
      this.mountedInterval = setInterval(() => {
        this.HandleRight();
      }, 3000);
    },
    PauseInterval() {
      this.$Message.success("paused");
      this.showButton = true;
      clearInterval(this.mountedInterval);
    },
    // 手機版滑動輪播
    HandleTouchStart(e) {
      this.startX = e.touches[0].pageX;
      console.log(`startX: ${this.startX}`);
      this.PauseInterval();
    },
    HandleTouchMove(e) {
      this.endX = e.touches[0].pageX;
      console.log(`endX: ${this.endX}`);
    },
    HandleTouchEnd(e) {
      console.log(this.startX, this.endX);
      if (this.startX && this.endX) {
        if (this.endX < this.startX) {
          this.HandleRight();
        } else {
          this.HandleLeft();
        }
      }
      this.startX = null;
      this.endX = null;
      this.StartInterval();
    },
    // 被選擇的 preview 有外匡
    SelectedPreview() {},
  },
};
</script>

<style lang="scss" scoped>
#Base {
  box-sizing: border-box;
  .carousel-base {
    // width: 1000px;
    // height: 600px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    touch-action: pan-y;
    .carousel-box {
      position: absolute;
      // width: 1000px;
      // height: 600px;
      @extend .center;
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
      color: white;
      opacity: 0.4;
      background-color: rgba(0, 0, 0);
      border: none;
    }
    // transition 一定有六個階段，enter 跟 leave 各三個 ========================
    .right-in-enter {
      // 從左邊的 100% 進來
      left: 100%;
    }
    .right-in-enter-active,
    .right-in-leave-active {
      transition: left 0.7s ease-in-out;
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
      transition: left 0.7s ease-in-out;
    }
    .left-in-enter-to,
    .left-in-leave {
      left: 0%;
    }
    .left-in-leave-to {
      left: 100%;
    }
  }
  // 預覽輪播 =====================================================
  .preview-container {
    // width: 1000px;
    gap: 20px;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    overflow-y: hidden;
    .preview {
      width: 175px;
      height: 105px;
      flex-shrink: 0;
      img {
        border-radius: 10px;
      }
    }
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.selected-preview {
  border: 5px double red;
}

.carousel-base,
.carousel-box,
.preview-container {
  width: 1000px;
  height: 600px;
}

@media screen and (max-width: 1000px) {
  .carousel-base,
  .carousel-box,
  .preview-container {
    width: 350px;
    height: 210px;
  }
}
</style>