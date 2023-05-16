<template lang="pug">
//- 請填寫功能描述👈
#Scratch
  h1.results(v-show="scratchPercent >=50") {{ winPrize? "恭喜得獎" : "下次再來"  }}
  canvas#bg-canvas(
    ref="sketchpad" 
    :width="canvasWidth" 
    :height="canvasHeight" 
    @mousedown="HandleMouseDown"  
    @mousemove="HandleMouseMove"
    @mouseup="HandleMouseUp"
    @mouseleave="HandleMouseUp" 
  )
  h1 {{ `${scratchPercent}%` }}
  .prize-num(v-for="item in prizeNumList") {{ item }}
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
    },
    lotteryNum: {
      type: Number,
      default: 7
    }
  },
  data() {
    return {
      ctx: null,  // canvas.getContext('2d') to use methods provided
      isDown: false,
      rect: null, // 取得 ref，`this.$refs.sketchpad.getBoundingClientRect()`,
      scratchPercent: 0,
      prizeNumList: [
        this.GenerateRandomNumber(),
        this.GenerateRandomNumber(),
        this.GenerateRandomNumber(),
        this.GenerateRandomNumber(),
        this.GenerateRandomNumber(),
      ]
    }
  },
  mounted() {
    const canvas = this.$refs.sketchpad;
    this.ctx = canvas.getContext('2d')
    // load image onto canvas
    this.SetUpCanvas()
  },
  computed: {
    // 是否包含中獎數字
    winPrize() {
      if (this.prizeNumList.includes(this.lotteryNum)) {
        return true
      }
      return false
    }
  },
  methods: {
    // Ref Init ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // 👉 初始化：把img畫到canvas上
    SetUpCanvas() {
      const ctx = this.ctx
      // setup image on canvas
      const image = new Image()
      image.src = this.foregroundImg
      image.crossOrigin = "Anonymous"  // tainted CORS origin
      image.onload = () => {
        ctx.drawImage(image, 0, 0)  // 從 0,0 開始畫 image
      }
    },
    // Event ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    HandleMouseDown() {
      // 👉 按下滑鼠取得一次周圍參數
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
    // 👉 取得可以計算的參數
    GetXY(e) {
      if (!this.rect) return;
      return {
        x: e.clientX - this.rect.left,
        y: e.clientY - this.rect.top
      }
    },
    // 👉 刮掉的功能
    Erase(x, y) {
      const ctx = this.ctx
      // 🔑 this is the key part, need this line of code to erase and show bg img
      ctx.globalCompositeOperation = 'destination-out';
      // 畫圈圈
      ctx.beginPath();
      ctx.arc(x, y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      // 算擦掉趴數
      this.CheckScratched();
    },
    // 👉 計算刮掉的趴數
    CheckScratched() {
      const ctx = this.ctx;
      // 取得canvas資訊，用getImageData去抓資料
      const canvas = this.$refs.sketchpad;
      const totalPixels = canvas.width * canvas.height;
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      // console.log(imageData);
      let erasedPixels = 0;
      // Iterate over the pixels and count the erased pixels
      for (let i = 0; i < pixels.length; i += 4) {
        const alpha = pixels[i + 3];
        if (alpha === 0) {
          erasedPixels++;
        }
      }
      // Calculate the percentage scratched off
      const scratchedPercentage = Math.floor((erasedPixels / totalPixels) * 100);
      this.scratchPercent = scratchedPercentage
    },
    //  Other Functions ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // random number generator
    GenerateRandomNumber() {
      return Math.floor(Math.random() * 10) + 1
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
    // background-image: url("https://dummyimage.com/600x500/25a12e/d417d4&text=This+is+a+dummy+image");
    background-image: url("https://picsum.photos/600/500?2");
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

  .results {
    background-color: #f0f0f0;
    padding: 10px 20px;
    color: blue;
    text-align: center;
  }
}
</style>
