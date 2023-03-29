<template lang="pug">
#CarouselView
  Base
</template>

<script>
export default {
  name:'CarouselView',
  components:{
    Carousel:()=>import("@/components/Carousel/Base.vue")
  }
}
</script>