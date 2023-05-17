<template lang="pug">
//- 請填寫功能描述👈
#Wheel1
  img.marker(src="@/components/Games/Wheel/imgs/marker.png")
  img.wheel(
    src="@/components/Games/Wheel/imgs/wheel.png" ref="wheel"
    :class="{'spin-wheel': isSpinning}"
    )
  img.button(
    src="@/components/Games/Wheel/imgs/button.png"
    :class="{ 'disabled-btn' : isSpinning }"
    @click="SpinWheel"
    )
  //- Button(@click="isSpinning=false") {{ isSpinning }}
</template>

<script>
export default {
  name: "Wheel1",
  data() {
    return {
      spinDeg: 0,
      actualDeg: 0,
      isSpinning: false
    };
  },
  computed: {

  },
  methods: {
    // press start btn
    SpinWheel() {
      if (this.isSpinning) return
      this.isSpinning = true
      // 選轉度數
      this.spinDeg = Math.floor(Math.random() * 5000) + 5000
      this.$refs.wheel.style.transform = `rotate(${this.spinDeg}deg)`
      // 旋轉時間是設定在 CSS
      setTimeout(() => {
        this.TransitionEnd()
      }, 5100)
    },
    // after the transition ends
    TransitionEnd() {
      this.isSpinning = false
      const actualDeg = this.spinDeg % 360
      this.$refs.wheel.style.transform = `rotate(${actualDeg}deg)`
    }
  }
};
</script>

<style lang="scss" scoped>
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
}

// disable button during spin
.disabled-btn {
  opacity: 0.5;
  pointer-events: none;
}

// spin time
.spin-wheel {
  transition: all 5s ease-in-out;
}

// stop transition
.transition-end {
  transition: none;
}

// 元件
#Wheel1 {}
</style>
