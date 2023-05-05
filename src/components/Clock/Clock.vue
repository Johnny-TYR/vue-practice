<template lang="pug">
#Clock
  svg#svg-container
    circle#face(cx="500" cy="500" r="450")
    circle#middle(cx="500" cy="500" r="80")
    //- g stands for "group", works like a div
    g#numbers
      text(x="425" y="180" fill="white") {{ "12" }}
      text(x="835" y="545" fill="white") {{ "3" }}
      text(x="90" y="545" fill="white") {{ "9" }}
      text(x="465" y="915" fill="white") {{ "6" }}
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
#Clock {}

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
    stroke: black;
    fill: white;

    #hour {
      width: 35px;
      height: 280px;
      transform-origin: center;
    }

    #min {
      width: 30px;
      height: 400px;
      transform-origin: center;
    }

    #sec {
      stroke: red;
      stroke-width: 5px;
      transform-origin: center;
    }
  }

  #numbers {
    font-size: 80px;
    font-family: 'Press Start 2P', cursive;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
