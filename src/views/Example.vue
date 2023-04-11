<template>
  <div id="app">
    <button @click="shuffle">shuffle</button>
    <button @click="add">add</button>

    <transition-group tag="ul" class="number-list" name="list">
      <li v-for="(item, index) in list" :key="item" class="item">{{ item }}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    };
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.list.length);
    },
    add() {
      this.list.splice(this.randomIndex(), 0, this.nextNum++);
    },
    shuffle() {
      this.list.sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  display: block;
  padding: 1rem;
  font-size: 1rem;
}

button {
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
}

.number-list {
  overflow: hidden;
  padding: 0;
  margin-bottom: 1.5rem;

  > li {
    display: inline-block;
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    background-color: #f00;
    color: #fff;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
}

.list-move {
  transition: all 0.8s ease;
}

.list-leave-active {
  position: absolute;
}

.list-enter-from {
  transform: translateY(-20px);
}

.list-leave-to {
  transform: translateY(20px);
}
</style>