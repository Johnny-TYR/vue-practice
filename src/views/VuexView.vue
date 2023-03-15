<template lang="pug">
#VuexView
  h1 {{ "Vuex Practice Page" }}
  ProductListOne
  ProductListTwo
  ProductListThree
  ProductListFour
</template>

<script>
export default {
  components: {
    ProductListOne: () => import("@/components/ProductListOne"),
    ProductListTwo: () => import("@/components/ProductListTwo.vue"),
    ProductListThree: () => import("@/components/ProductListThree.vue"),
    ProductListFour: () => import("@/components/ProductListFour.vue"),
  },
};
</script>

<style lang="scss" scoped>
#VuexView{
    h1{
        text-align: center;
        font-size: 60px;
    }
}
</style>