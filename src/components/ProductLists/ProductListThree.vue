<template lang="pug">
#ProductListThree
  h2 {{ "Product List Four" }}
    ul
      li(v-for="product in saleProducts", :key="product.id") {{ product.name }}
        span.price {{ " 💲" + product.price }}
  //- we're passing data into the `reducePrice` method
  button(@click="reducePrice(4)") {{ "Reduce Price with mutations" }}
</template>
  
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  computed: {
    products() {
      return this.$store.state.productList.products;
    },
    ...mapGetters("productList",["saleProducts"]),    // we can put any number of getters into our array
  },
  methods: {
    ...mapActions("productList", ["reducePriceAction"]),
    reducePrice(num) {
      this.reducePriceAction(num)
    }
  },
};
</script>
  
<style scoped lang="scss">
#ProductListThree {
  background: #e8800c;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;

  ul {
    padding: 0;
  }

  li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
  }
}

.price {
  font-weight: bold;
  color: #e8800c;
}</style>