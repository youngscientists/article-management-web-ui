<template>
  <div class="autocomplete">
    <input @change="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: "Autocomplete"
};
</script>

<style>
</style>
