<template>
  <div class="container container-centered">
    <div class="col-sm"></div>
    <slot/>
  </div>
</template>

<script>
/* ============
 * 2Grid Layout
 * ============
 *
 * Used for the register and login pages.
 *
 * Layouts are used to store a lot of shared code.
 * This way the app stays clean.
 */
export default {
  /**
   * The name of the layout.
   */
  name: "FullWidth"
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}

.container.container-centered {
  margin: 0 auto;
}
</style>
