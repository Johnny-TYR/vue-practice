<template lang="pug">
#CSSView
  ThreeD1
  ThreeD2
  ThreeD3
</template>

<script>
export default {
  name: 'CSSView',
  components: {
    ThreeD1: () => import('@/components/ThreeD/ThreeD1.vue'),
    ThreeD2: () => import('@/components/ThreeD/ThreeD2.vue'),
    ThreeD3: () => import('@/components/ThreeD/ThreeD3.vue'),
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