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
  h1 {{ CheckScratched }}
</template>

<script>
export default {
  name: "Scratch",
  props: {
    canvasWidth: {
      type: Number,
      default: 600
    },
    canvasHeight: {
      type: Number,
      default: 500
    },
    // 橡皮擦大小
    radius: {
      type: Number,
      default: 50
    },
    foregroundImg: {
      type: String,
      default: "https://picsum.photos/600/500?1"
    }
  },
  data() {
    return {
      ctx: null,  // canvas.getContext('2d') to use methods provided
      isDown: false,
      rect: null, // 取得 ref，`this.$refs.sketchpad.getBoundingClientRect()`,
      scratchPercent: 0
    }
  },
  mounted() {
    const canvas = this.$refs.sketchpad;
    this.ctx = canvas.getContext('2d')
    // load image onto canvas
    this.SetUpCanvas()
  },
  computed: {
  },
  methods: {
    // Ref Init ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    SetUpCanvas() {
      const ctx = this.ctx
      // setup image on canvas
      const image = new Image()
      image.src = this.foregroundImg
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
      // 算擦掉趴數
      // this.CheckScratched();
    },
    CheckScratched() {

    }
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Scratch {
  #bg-canvas {
    position: relative;
    border: 3px solid black;
    background-image: url("https://dummyimage.com/600x500/25a12e/d417d4&text=This+is+a+dummy+image");
  }
}

// 元件
#Scratch {

  .luckyNum {
    font-size: 50px;
    position: absolute;
    background-color: yellow;
    z-index: 100;
    top: 0;
    left: 0;
  }
}
</style>
