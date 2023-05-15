<template lang="pug">
//- 請填寫功能描述👈
#Scratch
  canvas.bg-canvas(ref="sketchpad" :width="canvasWidth" :height="canvasHeight")
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
    // load image onto canvas
    this.start()
  },
  methods: {
    // Ref Init ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    start() {
      // setup image on canvas
      const canvas = this.$refs.sketchpad;
      const ctx = this.ctx
      const image = new Image()
      image.src = "https://picsum.photos/600/500?1"
      image.onload = () => {
        ctx.drawImage(image, 0, 0)
      }
      // comp mode and handler
      ctx.globalCompositeOperation = 'destination-out';
      canvas.onmousedown = this.HandleMouseDown;
      canvas.onmousemove = this.HandleMouseMove;
      window.onmouseup = this.HandleMouseUp;

    },
    // Event ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    HandleMouseDown(e) {
      this.isDown = true
      let pos = this.GetXY(e)
      this.Erase(pos.x, pos.y)
    },
    HandleMouseUp(e) {
      this.isDown = false
    },
    HandleMouseMove(e) {
      if (!this.isDown) return
      let pos = this.GetXY(e)
      this.Erase(pos.x, pos.y)
    },
    // Function ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    GetXY(e) {
      let rect = this.$refs.sketchpad.getBoundingClientRect()
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    },
    Erase(x, y) {
      const ctx = this.ctx
      ctx.beginPath();
      ctx.arc(x, y, this.radius, 0, this.pi2);
      ctx.fill();
    }
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Scratch {
  .bg-canvas {
    border: 5px solid black;
    // background: blue;
  }
}

// 元件
#Scratch {}
</style>
