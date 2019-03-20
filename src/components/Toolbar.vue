<template>
  <div class="toolbar">
    <button class="button">Refresh</button>
    <button class="button">New Article</button>
    <button class="button">New Editor</button>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  components: {}
};
</script>

<style lang="scss">
.toolbar {
  width: 100%;
  height: 50px;
  background: white;

  .button {
    margin-right: 8px;
  }
}
</style>
