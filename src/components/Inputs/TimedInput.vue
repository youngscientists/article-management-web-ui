<template>
    <input :value="initialValue" @keyup="handleKeyup" :placeholder="placeholder">
</template>

<script>
export default {
  name: "TimedInput",
  props: {
    time: Number,
    initialValue: String,
            placeholder: String
  },
  data() {
    return { 
        timer: Object,
        text: String,
    };
  },
  methods: {
      handleKeyup(event) {
        clearInterval(this.timer);
        this.timer = setTimeout(() => this.update(event.target.value), isNaN(this.time) ? 500 : this.time);
      },
      update(text) {
          this.text = text;
            this.$emit("input", this.text);
      }
  }
};
</script>

<style>
</style>
