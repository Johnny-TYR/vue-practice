<template lang="pug">
#CSSView
  ThreeD1
  ThreeD2
  ThreeD4
  ThreeDTest
  div.svg-container
    Svg1
    Svg2
    Svg3
</template>

<script>
export default {
  name: 'CSSView',
  components: {
    ThreeD1: () => import('@/components/ThreeD/ThreeD1.vue'),
    ThreeD2: () => import('@/components/ThreeD/ThreeD2.vue'),
    ThreeD4: () => import('@/components/ThreeD/ThreeD4.vue'),
    ThreeDTest: () => import('@/components/ThreeD/ThreeDTest.vue'),
    Svg1: () => import('@/components/ThreeD/Svg1.vue'),
    Svg2: () => import('@/components/ThreeD/Svg2.vue'),
    Svg3: () => import('@/components/ThreeD/Svg3.vue'),
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
    display: flex;
    gap: 30px;
    margin-bottom: 20px;
  }
}
</style>