<template lang="pug">
#CSSView
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
  }
}
</script>

<style lang="scss" scoped>
#CSSView {
  .section {
    width: 100%;
    height: 100vh;
  }
}
</style>