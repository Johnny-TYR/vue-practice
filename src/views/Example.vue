<template lang="pug">
#Example
  .box
    .content
      p(v-for="i of 100" :key="i") {{i}}
</template>

<style lang="scss" scoped>
#Example{
  width: 100vw;
  height: 100vh;
}
  .box {
    position: relative;
    width: 50%;
    padding-bottom: 50%;
    background: #000;
    overflow: auto;
    .content {
      position: absolute;

    }
  }
  p {
    color: #eee;
  }
</style>