<template>
  <button class="primary" @click="isLoading = true">
    <slot v-if="!isLoading"></slot>
    <div title="4" v-if="isLoading">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 24 30"
        style="enable-background:new 0 0 50 50;"
        xml:space="preserve"
      >
        <rect x="0" y="0" width="4" height="10">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0"
            dur="0.6s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect x="10" y="0" width="4" height="10">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.2s"
            dur="0.6s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect x="20" y="0" width="4" height="10">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.4s"
            dur="0.6s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </svg>
    </div>
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
    },
    isLoading: new Boolean(false)
  },
  computed: {},
  data() {
    return {};
  }
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

  svg {
    width: 1em;
    color: white;
    fill: white;
  }
}

/* ----colors */
</style>
