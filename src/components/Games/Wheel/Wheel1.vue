<template lang="pug">
//- 請填寫功能描述👈
#Wheel1
  img.marker(src="@/components/Games/Wheel/imgs/marker.png")
  img.wheel(
    src="@/components/Games/Wheel/imgs/wheel.png" 
    ref="wheel" 
    @click="SpinWheelFlow"
    @touchstart="SpinWheelFlow"
    )
  img.button(
    src="@/components/Games/Wheel/imgs/button.png"
    :class="{ 'disabled-btn' : isSpinning }"
    @click="SpinWheelFlow"
    )
  .display {{ result }}
</template>

<script>
export default {
  name: "Wheel1",
  props: {
    // 要轉幾圈
    wheelTurn: {
      type: Number,
      default: 15
    },
    // 要轉幾秒
    spinTime: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      spinDeg: 0, // 總共會轉幾度
      startDeg: 0,  // 每次轉完後會定留在上一個角度
      isSpinning: false,  // 有沒有在轉判斷btn狀態
      result: "⭐️", // 顯示結果
      zoneSize: 45,  // 每區 360/8 deg
      symbolZones: {  // 因為順時針rotate，所以抓值要逆時針
        1: "Frog",
        2: "Snail",
        3: "Dolphin",
        4: "Ladybug",
        5: "Koala",
        6: "Unicorn",
        7: "Dragon",
        8: "Snowman",
      }
    };
  },
  methods: {
    // Flow ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    SpinWheelFlow() {
      if (this.isSpinning) return;
      // 開始旋轉
      this.SpinStart()
      // 結束後算現在的位子＋抓值
      setTimeout(() => {
        this.SpinEnd()
        this.GetResults()
      }, this.spinTime * 1000)
    },
    // Function ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    SpinStart() {
      this.isSpinning = true
      // 在props設定要轉幾圈
      let spinCycle = 360 * this.wheelTurn + 1
      let spinRange = this.Probabilities() // [start, end]
      this.spinDeg = Math.floor(Math.random() * (spinRange[1] - spinRange[0])) + (spinRange[0] + spinCycle)
      // 開始轉動
      this.$refs.wheel.style.transition = `all ${this.spinTime}s cubic-bezier(.6,.1,0,1)`
      this.$refs.wheel.style.transform = `rotate(${this.spinDeg}deg)`
    },
    SpinEnd() {
      this.isSpinning = false
      // 看轉完幾圈會到的度數
      this.startDeg = this.spinDeg % 360
      // 抓轉完結束的角度，才不會每次都 reset
      this.$refs.wheel.style.transition = 'none'
      this.$refs.wheel.style.transform = `rotate(${this.startDeg}deg)`
    },
    GetResults() {
      // 計算是在哪一格
      const resultNum = Math.ceil(this.startDeg / this.zoneSize)
      this.result = this.symbolZones[resultNum]
    },
    Probabilities() {
      let random = Math.random()
      let angleRange;

      // if (Math.random() < 0.3) {
      //   // Zone 1: 30% probability
      //   angleRange = [0, 45];  // Range for Zone 1
      // } else if (Math.random() < 0.5) {
      //   // Zone 2: 20% probability
      //   angleRange = [45, 90];  // Range for Zone 2
      // } else {
      //   // Remaining zones: 50% probability
      //   angleRange = [90, 360];  // Range for the remaining zones
      // }

      // 每個區塊都平等的樣子
      if (random < 0.125) {
        angleRange = [0, 45]; // Zone 1
      }
      if (random >= 0.125 && random < 0.25) {
        angleRange = [45, 90]; // Zone 2
      }
      if (random >= 0.25 && random < 0.375) {
        angleRange = [90, 135]; // Zone 3
      }
      if (random >= 0.375 && random < 0.5) {
        angleRange = [135, 180]; // Zone 4
      }
      if (random >= 0.5 && random < 0.625) {
        angleRange = [180, 225]; // Zone 5
      }
      if (random >= 0.625 && random < 0.75) {
        angleRange = [225, 270]; // Zone 6
      }
      if (random >= 0.75 && random < 0.875) {
        angleRange = [270, 315]; // Zone 7
      }
      if (random >= 0.875 && random < 1) {
        angleRange = [315, 360]; // Zone 8
      }
      console.log(angleRange);
      return angleRange;
    }
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Wheel1 {
  position: relative;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  user-select: none;

  .display {
    min-width: 180px;
    padding: 10px 20px;
    background-color: white;
    border-radius: 8px;
    text-align: center;
    font-size: 15px;
    font-family: 'Press Start 2P', cursive;
  }

  .marker {
    width: 50px;
    position: absolute;
    top: -30px;
    z-index: 2;
  }

  .wheel {
    width: 400px;
  }

}

// 元件
#Wheel1 {
  .button {
    width: 180px;
    cursor: pointer;

    &:active {
      scale: 0.98;
    }
  }

  // disable button during spin
  .disabled-btn {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
