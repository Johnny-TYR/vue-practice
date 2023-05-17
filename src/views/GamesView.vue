<template lang="pug">
//- 請填寫功能描述👈
#GamesView
  h1.title {{ "刮刮樂" }}
  .row
    Scratch
  h1.title {{ "轉盤 Version 1" }}
  .row
    Wheel1
  h1.title {{ "轉盤 Version 2" }} 
  .row 
    Wheel2
</template>

<script>
export default {
  name: "GamesView",
  components: {
    Scratch: () => import("@/components/Games/Scratch"),
    Wheel1: () => import("@/components/Games/Wheel/Wheel1.vue"),
    Wheel2: () => import("@/components/Games/Wheel/Wheel2.vue")
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$vh: 80vh;

// 排版
#GamesView {
  margin-bottom: 100px;

  .title {
    padding: 20px;
  }

  .row {
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
