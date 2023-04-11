<template lang="pug">
#DragDrop
  .drop-zone(@drop="OnDrop($event, 1)", @dragover.prevent, @dragenter.prevent)
    p {{ "List 1" }}
    .drag-element(
      v-for="item in listOne",
      :key="item.id",
      draggable,
      @dragstart="StartDrag($event, item)"
    ) {{ item.title }}
  .drop-zone(@drop="OnDrop($event, 2)", @dragover.prevent, @dragenter.prevent)
    p {{ "List 2" }}
    .drag-element(
      v-for="item in listTwo",
      :key="item.id",
      draggable,
      @dragstart="StartDrag($event, item)"
    ) {{ item.title }}
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: '0',
          title: "Item A",
          list: 1,
        },
        {
          id: '1',
          title: "Item B",
          list: 1,
        },
        {
          id: '2',
          title: "Item C",
          list: 2,
        },
      ],
    };
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1);
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2);
    },
  },
  methods: {
    // Adding drag and drop functionality using @dragstart
    StartDrag(e, item) {
      // store the id of the dragged element using the dataTransfer property
      console.log(e);
      e.dataTransfer.dropEffect = "move"; // controls the visual feedback
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("itemId", item.id);
    },
    OnDrop(e, targetList) {
      // retrieve the stored id so we can access the proper item in the array
      const itemId = e.dataTransfer.getData("itemId");
      const item = this.items.find((item) => item.id === itemId);
      item.list = targetList;
    },
  },
};
</script>

<style lang="scss" scoped>
#DragDrop {
  .drop-zone {
    width: 300px;
    min-height: 120px;
    background-color: lightgreen;
    padding: 20px 30px;
    margin-top: 20px;
    border-radius: 5px;
    font-size: medium;
  }
  .drag-element {
    background-color: lightblue;
    padding: 10px;
    margin-top: 10px;
  }
}
</style>