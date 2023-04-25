<template lang="pug">
#ThreeD3
  .camera   
    .box.box1
      h1 {{ "This is where my title will go" }}
    .box.box2
      iframe(:src="videoSrc" :style="videoStyle")
</template>

<script>
export default {
  name: "ThreeD3",
  data() {
    return {
      videoSrc: "https://www.youtube.com/embed/Za7PiYZlc4I",
      videoStyle: {
        width: `450px`,
        height: `270px`,
        border: "none"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#ThreeD3 {
  width: 100%;
  height: 100vh;
  @extend .center;

  .camera {
    width: 90%;
    height: 90%;
    border: 1px solid black;
    @extend .center;
    // 從多遠的地方看
    perspective: 1000px;
    perspective-origin: center top;
  }

  .box {
    width: 500px;
    height: 300px;
    box-sizing: border-box;
  }

  .box.box1 {
    background-color: lightsalmon;
  }

  .box.box2 {
    background-color: lightgrey;
    transform-style: preserve-3d;
    // option 1
    transform: skewY(25deg) translateY(117px);
    // option 2
    // rotate: 1 1 1 -60deg;
    // option 3
    // transform: perspective(1000px) rotateY(-25deg);
    @extend .center;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>