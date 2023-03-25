<template lang="pug">
#DatePickerView
  DatePicker1
  hr
  DatePicker2
  hr
  DatePicker3
</template>

<script>
export default {
  components: {
    DatePicker1: () => import("@/components/DatePickers/DatePicker1.vue"),
    DatePicker2: () => import("@/components/DatePickers/DatePicker2.vue"),
    DatePicker3: () => import("@/components/DatePickers/DatePicker3.vue"),
  },
};
</script>