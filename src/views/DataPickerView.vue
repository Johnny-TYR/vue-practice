<template lang="pug">
#DatePickerView
  DatePicker1
  DatePicker2
  DatePicker3
  DatePicker4
</template>

<script>
export default {
  components: {
    DatePicker1: () => import("@/components/DatePickers/DatePicker1.vue"),
    DatePicker2: () => import("@/components/DatePickers/DatePicker2.vue"),
    DatePicker3: () => import("@/components/DatePickers/DatePicker3.vue"),
    DatePicker4: () => import("@/components/DatePickers/DatePicker4.vue"),
  },
};
</script>