<template lang="pug">
#Clock
  svg#svg-container(view-box="0 0 100 100")
    circle#face(cx="500" cy="500" r="450")
    //- g stands for "group", works like a div
    g#hands
      rect#hour(x="475" y="485" rx="25" ry="25" :style="{transform: `rotate(${hourAngle}deg)`}") 
      rect#min(x="481" y="475" rx="25" ry="25" :style="{transform: `rotate(${minAngle}deg)`}") 
      line#sec(x1="500" y1="500" x2="500" y2="900" :style="{transform: `rotate(${secAngle}deg)`}")
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
    hourAngle() {
      const hour = this.currentTime.getHours() % 12
      const min = this.currentTime.getMinutes()
      return hour * 30 + min / 2 + 180
    },
    // 一圈360deg，每分鐘6deg，因為svg起點全指向6，所以+180
    minAngle() {
      const min = this.currentTime.getMinutes()
      console.log(min)
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
}

// 元件
#Clock {
  #svg-container {
    width: 1000px;
    height: 1000px;
    background-color: darkblue;
  }

  #face {
    stroke: white;
    stroke-width: 10px;
    fill: black;
  }

  #hands {
    stroke: white;
    stroke-width: 5px;
    fill: lightgray;

    #hour {
      width: 50px;
      height: 350px;
      transform-origin: center;
    }

    #min {
      width: 40px;
      height: 450px;
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
