<template lang="pug">
#Transitions
  div(style="height: 170px")
    transition
      .block(v-show="isShow") {{ "Hello Vue" }}
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
#Transitions {
  .block {
    width: 150px;
    height: 150px;
    background-color: yellow;
  }
}
// ========== Enter ==========
// 進場「之前」的樣式
.v-enter {
  opacity: 0;
}
// 進場「過程」的樣式
.v-enter-active {
  transition: opacity 1s;
}
// 進場「結束」的樣式
.v-enter-to {
  opacity: 1;
}
// ========== Leave ==========
// 退場「之前」的樣式
.v-leave {
  opacity: 1;
}
// 退場「過程」的樣式
.v-leave-active {
  transition: opacity 1s;
}
// 退場「結束」的樣式
.v-leave-to {
  opacity: 0;
}
</style>