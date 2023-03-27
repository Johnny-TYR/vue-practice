<template lang="pug">
#FlipCard
  .flip-card
    .top {{ "5" }}
    .bottom {{ "5" }}
</template>

<style lang="scss" scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
}
#FlipCard {
  .flip-card {
    color: white;
    font-size: 50px;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    display: inline-flex;
    flex-direction: column;
    .top {
      background-color: red;
      border-top-right-radius: 5px;
      border-top-left-radius: 7px;
    }
    .bottom {
      background-color: black;
      display: flex;
      align-items: flex-end;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 7px;
    }
    .top,
    .bottom {
      height: .75em;
      padding: 0.25em;
      line-height: 1;
    }
  }
}
</style>