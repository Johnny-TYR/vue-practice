<template lang="pug">
//- 請填寫功能描述👈
#Scratch
  canvas#bg-canvas(
    ref="sketchpad" 
    :width="canvasWidth" 
    :height="canvasHeight" 
    @mousedown="HandleMouseDown" 
    @mousemove="HandleMouseMove"
    @mouseup="HandleMouseUp"
    @mouseleave="HandleMouseUp"
  )
</template>

<script>
export default {
  name: "Scratch",
  data() {
    return {
      ctx: null,  // canvas.getContext('2d')
      canvasWidth: 600,
      canvasHeight: 500,
      isDown: false,
      radius: 50, // 橡皮擦大小
      rect: null, // 取得 ref，`this.$refs.sketchpad.getBoundingClientRect()`
    }
  },
  mounted() {
    const canvas = this.$refs.sketchpad;
    this.ctx = canvas.getContext('2d')
    // load image onto canvas
    this.SetUpCanvas()
  },
  methods: {
    // Ref Init ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    SetUpCanvas() {
      const ctx = this.ctx
      // setup image on canvas
      const image = new Image()
      image.src = "https://picsum.photos/600/500?1"
      image.onload = () => {
        ctx.drawImage(image, 0, 0)  // 從 0,0 開始畫 image
      }
    },
    // Event ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    HandleMouseDown() {
      // get coordinates of mouse
      this.rect = this.$refs.sketchpad.getBoundingClientRect()
      this.isDown = true
    },
    HandleMouseUp() {
      this.isDown = false
    },
    HandleMouseMove(e) {
      if (!this.isDown) return
      let pos = this.GetXY(e)
      this.Erase(pos.x, pos.y)
    },
    // Function ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    GetXY(e) {
      // let rect = this.$refs.sketchpad.getBoundingClientRect()
      if (!this.rect) return;
      return {
        x: e.clientX - this.rect.left,
        y: e.clientY - this.rect.top
      }
    },
    Erase(x, y) {
      const ctx = this.ctx
      // 🔑 this is the key part, need this line of code to erase and show bg img
      ctx.globalCompositeOperation = 'destination-out';
      // 畫圈圈
      ctx.beginPath();
      ctx.arc(x, y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Scratch {
  #bg-canvas {
    border: 3px solid lightsalmon;
    background-image: url("https://dummyimage.com/600x500/25a12e/d417d4&text=This+is+a+dummy+image");
  }
}

// 元件
#Scratch {}
</style>
