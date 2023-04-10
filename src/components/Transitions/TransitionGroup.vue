<template lang="pug">
#TransitionGroup
  Button-group
    Button(@click="ClickAdd") {{ "Add" }}
    Button(@click="ClickRemove") {{ "Remove All" }}
    Button(@click="ClickShuffle") {{ "Shuffle" }}
  transition-group.number-list(tag="ul", name="list")
    li.item(v-for="(item, index) in list", :key="index") {{ item }}
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    ClickAdd() {
      const randomNumber = Math.ceil(Math.random() * 100) + 1;
      this.list.push(randomNumber);
    },
    ClickRemove() {
      this.list = [];
    },
    ClickShuffle() {
      console.log("adfkj");
    },
  },
};
</script>

<style lang="scss" scoped>
#TransitionGroup {
  width: 500px;
  .number-list {
    padding: 20px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    .item {
      margin-right: 10px;
      list-style-type: none;
      width: 40px;
      height: 40px;
      background-color: lightseagreen;
      @extend .center;
    }
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>