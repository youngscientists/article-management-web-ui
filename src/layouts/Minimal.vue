<template>
  <div class="container container-centered">
    <!-- Content will be placed here -->
    <slot/>
  </div>
</template>

<script>
/* ============
 * Minimal Layout
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
  name: "MinimalLayout"
};
</script>

<style lang="scss" scoped>
.container {
  width: 800px;
}

.container.container-centered {
  margin: 0 auto;
}
</style>
