<template lang="pug">
//- 請填寫功能描述👈
#GamesView
  .scratch
    Scratch
</template>

<script>
export default {
  name: "GamesView",
  components: {
    Scratch: () => import("@/components/Games/Scratch")
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// 排版
#GamesView {
  .scratch {
    width: 100%;
    height: 100vh;
    @extend .center
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// 元件
#GamesView {}
</style>
