<template lang="pug">
#Clock
  .bg-img
  svg#svg-container
    //- circle#orbit(cx="500" cy="500" r="500")
    circle#face(cx="500" cy="500" r="450")
    circle#middle(cx="500" cy="500" r="50")
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
    g#time
      text(x="500" y="300" fill="white") {{ weekNum }}
      text(x="350" y="700" fill="white") {{ monthNum }}
      text(x="400" y="700" fill="white") {{ currentTime.getDate() }}
    circle#mini-middle(cx="500" cy="500" r="20")
</template>

<script>
export default {
  name: "Clock",
  data() {
    return {
      currentTime: new Date(),
      timer: null,
      weekNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      monthNames: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
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
    },
    weekNum() {
      let num = this.currentTime.getDay()
      return this.weekNames[num]
    },
    monthNum() {
      let num = this.currentTime.getMonth()
      return this.monthNames[num]
    }
  }
};
</script>

<style lang="scss" scoped>
// 排版
#Clock {
  @extend .center;
}

// 元件
#Clock {
  #svg-container {
    width: 1000px;
    height: 1000px;
    font-family: 'Press Start 2P', cursive;
    z-index: 2;
  }

  #face {
    stroke: midnightblue;
    stroke-width: 10px;
    fill: black;
    fill-opacity: 0;
  }

  #middle {
    fill: midnightblue;
  }

  #mini-middle {
    stroke: white;
    fill: darkgray;
  }

  // =============================================
  #numbers {
    font-size: 80px;
  }

  #hands {
    box-sizing: border-box;
    fill: #f6f6f6;

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

  #time {
    font-size: 20px;
  }

  // =============================================
  .bg-img {
    height: 900px;
    width: 900px;
    z-index: 1;
    background-image: url("/Users/johnny/Desktop/vue-practice/public/imgs/milkyway.jpeg");
    background-size: 900px 900px;
    border-radius: 50%;
    position: absolute;
    /* linear:play an animation with the same speed from beginning to end */
    animation: bg_loop 60s infinite linear;
  }

  @keyframes bg_loop {
    100% {
      // starting position of bg image
      background-position: -2000px;
      transform: rotate(360deg);
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
