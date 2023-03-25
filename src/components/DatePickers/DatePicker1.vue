<template lang="pug">
#DatePicker1
  h2.desc {{ "type=date/daterange，可以用 placement 決定彈窗的出現位置" }}
  .container
    DatePicker
      Row
        Col(span=12)
          DatePicker(type="date", placeholder="date")
        Col(span=12)
          DatePicker(
            type="daterange",
            placeholder="daterange",
            placement="bottom-end"
          )
  h2.desc {{ "adfa" }}
  .container
    DatePicker
</template>

<style lang="scss" scoped>
#DatePicker1 {
  .desc {
    margin: 10px;
  }
  .container {
    border: 1px solid black;
    width: 1000px;
    padding: 50px;
    margin: 10px;
  }
}
</style>