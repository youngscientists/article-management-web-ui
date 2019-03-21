<template>
  <button class="button">
    <i class="material-icons">{{icon}}</i>
    {{text}}
  </button>
</template>

<script>
export default {
  name: "MaterialButton",
  props: {
    icon: String,
    text: String
  }
};
</script>

<style lang="scss">
i {
  vertical-align: middle;
}
</style>
