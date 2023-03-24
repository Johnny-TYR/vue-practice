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
    ProductListOne: () => import("@/components/ProductLists/ProductListOne"),
    ProductListTwo: () => import("@/components/ProductLists/ProductListTwo.vue"),
    ProductListThree: () => import("@/components/ProductLists/ProductListThree.vue"),
    ProductListFour: () => import("@/components/ProductLists/ProductListFour.vue"),
  },
};
</script>

<style lang="scss" scoped>
#VuexView{
    h1{
        text-align: center;
        font-size: 50px;
    }
}
</style>