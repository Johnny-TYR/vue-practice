<template lang="pug">
#MiniPreview
  .preview-container
    .preview(
      v-for="(img, index) in imgList",
      :key="img.src",
      @click="SetShow(index)"
    )
      img(:src="img.src")
</template>

<script>
export default {
  name: "MiniPreview",
  props: {
    imgList: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
#MiniPreview {
  .preview-container {
    width: 800px;
    gap: 20px;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    overflow-y: hidden;
    .preview {
      width: 200px;
      height: 120px;
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
</style>