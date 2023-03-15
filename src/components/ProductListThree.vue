<template lang="pug">
#ProductListThree
  h2 {{ "Product List Three" }}
    ul
      li(v-for="product in products", :key="product.id") {{ product.name }}
        span.price {{ " 💲" + product.price }}
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>