<template>
  <div v-theme="{background: 'primary'}" class="header">
    <div class="container-fluid">
      <div class="header-body">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseHeader",
  props: {
    type: {
      type: String,
      default: "primary",
      description: "Header background type"
    }
  }
};
</script>
<style>
</style>
