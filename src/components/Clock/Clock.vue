<template lang="pug">
#Clock
  svg#svg-container
    circle#face(cx="500" cy="500" r="450")
    circle#middle(cx="500" cy="500" r="100")
    //- g stands for "group", works like a div
    g#hands
      rect#hour(x="482" y="500" rx="25" ry="25" :style="{transform: `rotate(${hourAngle}deg)`}") 
      rect#min(x="485" y="500" rx="25" ry="25" :style="{transform: `rotate(${minAngle}deg)`}") 
      line#sec(x1="500" y1="500" x2="500" y2="900" :style="{transform: `rotate(${secAngle}deg)`}")
    circle#mini-middle(cx="500" cy="500" r="20")
</template>

<script>
export default {
  name: "Clock",
  data() {
    return {
      currentTime: new Date(),
      timer: null
    }
  },
  mounted() {
    this.timer = setInterval(() => {

      this.currentTime = new Date()
    }, 1000)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  computed: {
    // 每整點30deg，每分鐘0.5deg + 原本歸零的180deg
    hourAngle() {
      const hour = this.currentTime.getHours()
      const min = this.currentTime.getMinutes()
      return hour % 12 * 30 + min * 0.5 + 180
    },
    // 一圈360deg，每分鐘6deg，因為svg起點全指向6，所以+180
    minAngle() {
      const min = this.currentTime.getMinutes()
      return min * 6 + 180
    },
    // 一圈360deg，每秒6deg，因為svg起點全指向6，所以+180
    secAngle() {
      const sec = this.currentTime.getSeconds()
      console.log(sec);
      return sec * 6 + 180
    }
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Clock {
  height: 100vh;
  @extend .center;
  background-color: darkblue;
}

// 元件
#Clock {
  #svg-container {
    width: 1000px;
    height: 1000px;
  }

  #face {
    stroke: white;
    stroke-width: 25px;
    fill: black;
  }

  #middle {
    stroke: white;
    fill: darkblue;
  }

  #mini-middle {
    stroke: white;
    fill: black;
  }

  #hands {
    box-sizing: border-box;
    stroke: white;
    fill: #f0f0f0;

    #hour {
      width: 35px;
      height: 320px;
      transform-origin: center;
    }

    #min {
      width: 30px;
      height: 430px;
      transform-origin: center;
    }

    #sec {
      stroke: red;
      transform-origin: center;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
