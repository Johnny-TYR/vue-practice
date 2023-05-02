<template lang="pug">
#CSSView
  div.svg-container
    Svg1
  ThreeD1
  ThreeD2
  ThreeD4
  ThreeDTest
</template>

<script>
export default {
  name: 'CSSView',
  components: {
    ThreeD1: () => import('@/components/ThreeD/ThreeD1.vue'),
    ThreeD2: () => import('@/components/ThreeD/ThreeD2.vue'),
    ThreeD4: () => import('@/components/ThreeD/ThreeD4.vue'),
    ThreeDTest: () => import('@/components/ThreeD/ThreeDTest.vue'),
    Svg1: () => import('@/components/ThreeD/Svg1.vue')
  }
}
</script>

<style lang="scss" scoped>
#CSSView {
  .section {
    width: 100%;
    height: 100vh;
  }

  .svg-container {
    height: 100vh;
  }
}
</style>