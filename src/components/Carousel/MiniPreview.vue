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
  .preview-container
    .preview(
      v-for="(img, index) in imgList",
      :key="img.id",
      @click="setShow(index)"
    )
      img(:src="img.src")
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
      show: 0,
    };
  },
  methods: {
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
  .preview-container {
    display: flex;
    justify-content: space-between;
    overflow: auto;
    gap: 20px;
    width: 1000px;
    height: auto;
    .preview {
      width: 150px;
      height: 90px;
      flex-shrink: 0;
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
</style>