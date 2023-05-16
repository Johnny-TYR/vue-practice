<template lang="pug">
//- 請填寫功能描述👈
#Wheel1
  img.marker(src="@/components/Games/Wheel/imgs/marker.png")
  img.wheel(src="@/components/Games/Wheel/imgs/wheel.png" ref="wheel")
  img.button(
    src="@/components/Games/Wheel/imgs/button.png"
    :class="{ 'disabled-btn' : isSpinning}"
    @click="SpinWheel"
    )
</template>

<script>
export default {
  name: "Wheel1",
  data() {
    return {
      spinDeg: 0,
      isSpinning: false
    };
  },
  methods: {
    // press start btn
    SpinWheel() {
      let deg = Math.floor(Math.random() * 5000) + 5000
      console.dir(this.$refs.wheel);
    },
    // when animation end
    TransitionEnd() {

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

.disabled-btn {
  display: none;
}

// 元件
#Wheel1 {}
</style>
