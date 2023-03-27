<template>
  <div>
    <TimePicker v-model="selectedTime" :format="format"></TimePicker>
    <p>Selected Time: {{ selectedTime }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTime: "",
      format: "HH:mm",
    };
  },
};
</script>
