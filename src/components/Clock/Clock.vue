<template lang="pug">
#Clock
  .bg-img
  //- .orbit
  //-   img(src="https://cdn-icons-png.flaticon.com/512/619/619175.png")
  //-   .orbit-text {{ weekNum }}
  svg#svg-container(viewBox="0 0 700 700")
    circle#face(cx="350" cy="350" r="300")
    circle#middle(cx="350" cy="350" r="30")
    //- g stands for "group", works like a div
    g#numbers
      text(x="315" y="120" fill="white") {{ "12" }}
      text(x="580" y="375" fill="white") {{ "3" }}
      text(x="330" y="630" fill="white") {{ "9" }}
      text(x="80" y="370" fill="white") {{ "6" }}
    g#hands
      rect#hour(x="340" y="350" rx="25" ry="25" :style="{transform: `rotate(${hourAngle}deg)`}") 
      rect#min(x="340" y="350" rx="25" ry="25" :style="{transform: `rotate(${minAngle}deg)`}") 
      line#sec(x1="350" y1="350" x2="350" y2="640" :style="{transform: `rotate(${secAngle}deg)`}")
    g#time
      text(x="450" y="700" fill="white") {{`${monthNum} ${currentTime.getDate()}` }}
    circle#mini-middle(cx="350" cy="350" r="10")
    
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
  position: relative;
  font-family: 'Press Start 2P', cursive;
}

// 元件
#Clock {
  #svg-container {
    width: 700px;
    height: 700px;
    z-index: 3;
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
    font-size: 40px;
  }

  #hands {
    box-sizing: border-box;
    fill: #f6f6f6;

    #hour {
      width: 20px;
      height: 180px;
      transform-origin: center;
    }

    #min {
      width: 20px;
      height: 280px;
      transform-origin: center;
    }

    #sec {
      stroke: red;
      stroke-width: 5px;
      transform-origin: center;
    }
  }

  #time {
    font-size: 30px;
  }

  // =============================================
  .bg-img {
    height: 600px;
    width: 600px;
    z-index: 2;
    background-image: url("/Users/johnny/Desktop/vue-practice/public/imgs/milkyway.jpeg");
    background-size: 600px 600px;
    border-radius: 50%;
    position: absolute;
    /* linear:play an animation with the same speed from beginning to end */
    animation: bg_loop 100s infinite linear;
  }

  @keyframes bg_loop {
    100% {
      // starting position of bg image
      background-position: -10000px;
      transform: rotate(360deg);
    }
  }

  // =============================================
  .orbit {
    position: absolute;
    width: 750px;
    height: 750px;
    border-radius: 50%;
    border: 10px solid white;
    animation: spin-right 10s linear infinite;

    img {
      width: 100px;
      position: absolute;
      top: -33px;
      left: 600px;
    }
  }

  .orbit-text {
    font-size: 35px;
    color: yellow;
    position: absolute;
    top: -23px;
    left: 310px;
  }

  @keyframes spin-right {
    100% {
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
