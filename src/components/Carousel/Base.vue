<template lang="pug">
#Base
  .carousel-base
    .carousel-container
  pre {{imgList}}
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
    return {};
  },
};
</script>

<style lang="scss" scoped>
#Base {
  box-sizing: border-box;
  .carousel-base {
    width: 1000px;
    height: 600px;
    background-color: whitesmoke;
    .carousel-container {
      width: 95%;
      height: 95%;
      border: 1px solid black;
      background-color: lightgreen;
      @extend .center;
      overflow: hidden;
    }
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>