<template lang="pug">
//- 請填寫功能描述👈
#Wheel1
  img.marker(src="@/components/Games/Wheel/imgs/marker.png")
  img.wheel(
    src="@/components/Games/Wheel/imgs/wheel.png" ref="wheel"
    :class="isSpinning ? 'spin-wheel' : 'transition-end'"
    )
  img.button(
    src="@/components/Games/Wheel/imgs/button.png"
    :class="{ 'disabled-btn' : isSpinning }"
    @click="SpinWheel"
    )
  .display {{ result }}
</template>

<script>
export default {
  name: "Wheel1",
  data() {
    return {
      spinDeg: 0,
      startDeg: 0,
      isSpinning: false,
      // for showing results
      result: "Results!",
      zoneSize: 45,  // each zone is 45deg
      symbolZones: {  // counter clockwise order cuz our wheel rotates clockwise
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
  computed: {

  },
  methods: {
    // Flow ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    SpinWheel() {
      if (this.isSpinning) return
      this.isSpinning = true
      // 選轉度數
      this.spinDeg = Math.floor(Math.random() * 5000) + 5000
      this.$refs.wheel.style.transform = `rotate(${this.spinDeg}deg)`
      // 旋轉時間是設定在 CSS
      setTimeout(() => {
        this.TransitionEnd()
        this.GetResults()
      }, 5100)
    },
    // Function ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    // after the transition ends
    TransitionEnd() {
      this.isSpinning = false
      // 看轉完幾圈會到的度數
      this.startDeg = this.spinDeg % 360
      // 從上一個轉到的位置開始
      this.$refs.wheel.style.transform = `rotate(${this.startDeg}deg)`
    },
    GetResults() {
      const resultNum = Math.ceil(this.startDeg / this.zoneSize)
      this.result = this.symbolZones[resultNum]
    }
  }
};
</script>

<style lang="scss" scoped>
// variables
$spinTime: 5s;

// 排版
#Wheel1 {
  position: relative;
  width: 400px;
  // background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  user-select: none;

  .marker {
    width: 50px;
    position: absolute;
    top: -30px;
    z-index: 2;
  }

  .wheel {
    width: 400px;
  }

  .button {
    width: 180px;
    cursor: pointer;

    &:active {
      scale: 0.98;
    }
  }

  .display {
    min-width: 180px;
    padding: 10px 20px;
    background-color: white;
    border-radius: 5px;
    text-align: center;
    font-size: 15px;
    font-family: 'Press Start 2P', cursive;
  }
}

// disable button during spin
.disabled-btn {
  opacity: 0.5;
  pointer-events: none;
}

// spin time
.spin-wheel {
  transition: all $spinTime ease-in-out;
}

// stop transition
.transition-end {
  transition: none;
}

// 元件
#Wheel1 {}
</style>
