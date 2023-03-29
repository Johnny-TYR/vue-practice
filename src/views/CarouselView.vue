<template lang="pug">
#CarouselView
  Carousel(:imgList="imgList")
</template>

<script>
export default {
  name: "CarouselView",
  components: {
    Carousel: () => import("@/components/Carousel/Base.vue"),
  },
  data() {
    return {
      imgList: [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/382.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/383.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/384.png",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#CarouselView {
  @extend .center;
  height: 100vh;
  // background: url('@/assets/logo.png');
  background-color: white;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>