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
    @click="SpinWheelFlow"
    )
  .display {{ result }}
  //- pre {{  spinDeg }}
  //- pre {{  startDeg }}
</template>

<script>
export default {
  name: "Wheel1",
  data() {
    return {
      spinDeg: 0,
      startDeg: 0,
      isSpinning: false,
      result: "⭐️",
      zoneSize: 45,  // each zone is 360/8 deg
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
    spinRange() {

    }
  },
  methods: {
    // Flow ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    SpinWheelFlow() {
      // 開始旋轉
      this.SpinStart()
      // transition 5s 結束後算現在的位子＋抓值
      setTimeout(() => {
        this.SpinEnd()
        this.GetResults()
      }, 5100)
    },
    // Function ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    SpinStart() {
      this.isSpinning = true
      let spinRange = this.Probabilities()
      this.spinDeg = Math.floor(Math.random() * (spinRange[1] - spinRange[0])) + spinRange[0]
      this.$refs.wheel.style.transform = `rotate(${this.spinDeg}deg)`
    },
    SpinEnd() {
      this.isSpinning = false
      // 看轉完幾圈會到的度數
      this.startDeg = this.spinDeg % 360
      // 抓轉完結束的角度，才不會每次都 reset
      this.$refs.wheel.style.transform = `rotate(${this.startDeg}deg)`
    },
    GetResults() {
      const resultNum = Math.ceil(this.startDeg / this.zoneSize)
      this.result = this.symbolZones[resultNum]
    },
    Probabilities() {
      let spinRange;
      if (Math.random() < 0.3) {
        // Zone 1: 30% probability
        spinRange = [0, 45];  // Range for Zone 1 (e.g., first zone)
      } else if (Math.random() < 0.5) {
        // Zone 2: 20% probability
        spinRange = [45, 90];  // Range for Zone 2 (e.g., second zone)
      } else {
        // Remaining zones: 50% probability
        spinRange = [91, 360];  // Range for the remaining zones (e.g., third to eighth zone)
      }
      console.log(spinRange);
      return spinRange;
    }
  }
};
</script>

<style lang="scss" scoped>
// 設定轉盤要轉多久
$spinTime: 5s;

// 排版
#Wheel1 {
  position: relative;
  width: 400px;
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

  .display {
    min-width: 180px;
    padding: 10px 20px;
    background-color: white;
    border-radius: 5px;
    text-align: center;
    font-size: 15px;
    font-family: 'Press Start 2P', cursive;
  }

  // disable button during spin
  .disabled-btn {
    opacity: 0.5;
    pointer-events: none;
  }

  // start spin
  .spin-wheel {
    transition: all $spinTime ease-in-out;
  }

  // end spin
  .transition-end {
    transition: none;
  }
}
</style>
