<template lang="pug">
#GridView
  h1 {{ "Grid Practice Page" }}
  .gridContainer 
    .gridItem
    .gridItem
    .gridItem
    .gridItem
    .gridItem
    .gridItem
    .gridItem
    .gridItem
    .gridItem
</template>

<style lang="scss" scoped>
#GridView {
  .gridContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border: 5px solid darkcyan;
    .gridItem {
      box-sizing: border-box;
      border: 1px solid black;
      width: 100%;
      height: 100px;
      grid-row-start: 1;
      grid-row-end:4
    }
  }
}
</style>