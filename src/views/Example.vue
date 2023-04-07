<template lang="pug">
#Transitions
  div(style="height: 120px")
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
  position: relative;
  display: block;
  padding: 1rem;
  font-size: 1rem;
}

.block {
  display: block;
  width: 150px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-color: #0f0;
}
// When isShow == false, runs the v-leave transitions, so these are 2 separate animations

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
// ==========================================
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