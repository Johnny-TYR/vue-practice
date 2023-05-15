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
      canvasWidth: 600,
      canvasHeight: 500,
      isDown: false,
      radius: 50,
      pi2: Math.pi * 2,
    }
  },
  mounted() {
    const canvas = this.$refs.sketchpad;
    this.ctx = canvas.getContext('2d')

    const image = new Image()
    image.src = "https://picsum.photos/600/500?1"
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0)
    }
  },
  methods: {
    DrawRect() {
      const ctx = this.ctx
      ctx.beginPath()
      ctx.moveTo(30, 50)
      ctx.lineTo(150, 100)
      ctx.stroke()
    },

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
