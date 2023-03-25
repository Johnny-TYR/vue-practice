<template lang="pug">
#DatePickerView
  DatePicker1
</template>

<script>
export default {
  components:{
    DatePicker1:()=>import("@/components/DatePickers/DatePicker1.vue")
  }
}
</script>