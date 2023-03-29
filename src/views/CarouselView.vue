<template lang="pug">
#CarouselView
  Carousel
</template>

<script>
export default {
  name: "CarouselView",
  components: {
    Carousel: () => import("@/components/Carousel/Base.vue"),
  },
};
</script>

<style lang="scss" scoped>
#CarouselView {
  @extend .center;
  height: 100vh;
  background: url('@/assets/pika.png');
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>