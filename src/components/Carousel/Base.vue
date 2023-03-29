<template lang="pug">
#Base
  .carousel-base
    .carousel-container
      h1 {{ "FirstSlide" }}
</template>

<style lang="scss" scoped>
#Base {
  box-sizing: border-box;
  .carousel-base {
    width: 1000px;
    height: 600px;
    background-color: black;
    .carousel-container {
      width: 95%;
      height: 95%;
      border: 1px solid black;
      background-color: lightgreen;
      @extend .center
    }
  }
}
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>