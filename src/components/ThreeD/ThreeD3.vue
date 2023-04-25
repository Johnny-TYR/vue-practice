<template lang="pug">
#ThreeD3
  .camera   
    .space 
      .box 
        h1 {{ "top left" }}
</template>

<style lang="scss" scoped>
#ThreeD3 {
  width: 100%;
  height: 100vh;
  @extend .center;

  .camera {
    width: 1000px;
    height: 800px;
    border: 1px solid black;
    @extend .center;
  }

  .space {
    @extend .center;
  }

  .box {
    width: 600px;
    height: 400px;
    background-color: lightgrey;
    transform: skewY(30deg);
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>