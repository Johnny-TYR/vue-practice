<template lang="pug">
#Example
  .Example
    transition(name="appear")
      .box(v-show="isShow")
  Button(@click="isShow = !isShow") {{ "Toggle" }}
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>


<style lang="scss" scoped>
$box: 300px;
#Example {
  .Example {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 400px;
    text-align: center;
    line-height: 100px;
    background-color: lightcyan;
    border: 1px solid black;
  }
  .box {
    width: $box;
    height: $box;
    background-color: lightgreen;
  }
  // 進場「之前」的樣式
  .appear-enter-from {
    opacity: 0;
  }
  // 進場過程
  .appear-enter-active {
    transition: opacity 1s;
  }
  // 進場「結束時」的樣式
  .appear-enter-to {
    opacity: 0;
  }
  .appear-leave-from {
    opacity: 0;
  }
  .appear-leave-active {
    transition: opacity 1s;
  }
  .appear-leave-to {
    opacity: 1;
  }
}
</style>