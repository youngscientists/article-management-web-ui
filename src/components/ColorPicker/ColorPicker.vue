<template>
  <div class="colorPickerContainer">
    <div class="colorPickerColorArea">
      <div
        class="colorPickerColor"
        @click="clickOnColor"
      >
        <div
          class="colorPickerSlider"
          :style="{bottom: `${color.r * 184}px `}"
          @mousedown="moveSlider"
        />
      </div>
      <div class="colorPickerColor">
        <div
          class="colorPickerSlider"
          :style="{bottom: `${(color.g * 184)}px `}"
        />
      </div>
      <div class="colorPickerColor">
        <div
          class="colorPickerSlider"
          :style="{bottom: `${color.b * 184}px `}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "ColorPicker",
  props: {
    color: { r: Number, g: Number, b: Number },
    colorKey: String
  },

  methods: {
    moveSlider: e => {
      // TODO
      console.log("A", e);
    },
    clickOnColor: e => {
      // TODO Set Color based on click location
      console.log("E", e.offsetY);
      store.state.theme[colorKey] = "#000"; // find a way to get colorKey and add mutation to store
    }
  }
};
</script>

<style lang="sass">
@import ./ColorPicker
</style>
