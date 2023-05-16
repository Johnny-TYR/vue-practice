<template lang="pug">
//- 請填寫功能描述👈
#GamesView
  h1.title {{ "刮刮樂" }}
  .scratch
    Scratch
  h1.title {{ "轉盤" }}
  .wheel

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
$vh: 60vh;
// 排版
#GamesView {
  .scratch {
    width: 100%;
    height: $vh;
    background-color: lightblue;
    @extend .center-column
  }
}

.center-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

// 元件
#GamesView {}
</style>
