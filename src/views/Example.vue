<template lang="pug">
#Example
  h1(v-for="item in colorList", :key="item.id", @click="DeleteColor(item.id)") {{ item.name }}
</template>

<script>
export default {
  data() {
    return {
      colorList: [
        { id: "1", name: "red" },
        { id: "2", name: "orange" },
        { id: "3", name: "yellow" },
        { id: "4", name: "green" },
        { id: "5", name: "blue" },
        { id: "6", name: "indigo" },
        { id: "7", name: "purple" },
      ],
    };
  },
  methods: {
    DeleteColor(id) {
      console.log(id);
      let index = this.colorList.findIndex((colorObj) => {
        return colorObj.id === id;
      });
      if (index !== -1) {
        this.colorList.splice(index, 1);
      }
    },
  },
};
</script>