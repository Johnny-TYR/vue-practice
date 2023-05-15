<template lang="pug">
//- 請填寫功能描述👈
#Scratch
  canvas.bg-canvas(ref="sketchpad" :width="canvasWidth" :height="canvasHeight")
  Button(@click="DrawRect") {{ "draw rect" }}
</template>

<script>
export default {
  name: "Scratch",
  data() {
    return {
      ctx: null,
      canvasWidth: 1000,
      canvasHeight: 500,
    }
  },
  mounted() {
    const canvas = this.$refs.sketchpad;
    this.ctx = canvas.getContext('2d')
  },
  methods: {
    DrawRect() {
      const ctx = this.ctx
      ctx.beginPath()
      ctx.moveTo(30, 50)
      ctx.lineTo(150, 100)
      ctx.stroke()
    }
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Scratch {
  .bg-canvas {
    border: 5px solid black;
  }
}

// 元件
#Scratch {}
</style>
