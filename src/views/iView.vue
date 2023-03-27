<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    count: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.value = newValue < 0 ? 0 : newValue;
      },
    },
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>
