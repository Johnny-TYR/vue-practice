<template lang="pug">
//- 請填寫功能描述👈
#Clock
  svg.svg-container
    circle(cx="50%" cy="50%" r="200" stroke="black" stroke-width="2" fill="lightgreen")
</template>

<script>
export default {
  name: "Clock",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Clock {
  height: 100vh;
  background-color: #f0f0f0;
  @extend .center;
}

// 元件
#Clock {
  .svg-container {
    width: 500px;
    height: 500px;
    background-color: white;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
