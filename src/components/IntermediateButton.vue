<template>
  <button class="primary">
    <slot></slot>
  </button>
</template>

<script>
/* ============
 * Intermediate Button
 * ============
 *
 * Button iwth a loading animation
 *
 */
import SlotMixin from "@/mixins/slot";
export default {
  name: "Card",
  mixins: [SlotMixin],
  props: {
    contextualStyle: {
      default: "primary",
      type: String,
      required: false
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
button {
  color: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 1px;
  display: inline-block;
  width: 200px;
  padding: 8px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  &.disabled {
    pointer-events: none;
    background-color: #757575 !important;
  }
  &.primary {
    background-color: rgba(238, 50, 57, 1);
    border: none;
    &:hover,
    &:focus {
      background-color: rgba(238, 50, 57, 0.9);
      color: #f5f5f5;
    }
  }
  &.secondary {
    background-color: rgba(49, 27, 146, 1);
    border: none;
    &:hover,
    &:focus {
      background-color: rgba(49, 27, 146, 0.9);
      color: #f5f5f5;
    }
  }
}

/* ----colors */
</style>
