<template>
  <div class="colorPickerContainer">
    <div class="colorPickerColorArea">
      <div class="colorPickerColor" @click="clickOnColor">
        <div
          class="colorPickerSlider"
          :style="{bottom: `${color.r * 184}px `}"
          @mousedown="moveSlider"
        />
      </div>
      <div class="colorPickerColor">
        <div class="colorPickerSlider" :style="{bottom: `${(color.g * 184)}px `}" />
      </div>
      <div class="colorPickerColor">
        <div class="colorPickerSlider" :style="{bottom: `${color.b * 184}px `}" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import themeModule from "@/store/modules/theme/theme.index";
import store from "@/store";
// const theme = getModule(themeModule, store);

@Component({
  props: {
    color: { r: Number, g: Number, b: Number },
    colorKey: String
  },
  data() {
    return {
      theme: getModule(themeModule, this.$store)
    };
  },
  methods: {
    moveSlider: e => {
      // TODO
      console.log("A", e);
    },
    clickOnColor: e => {
      // TODO Set Color based on click location
      console.log("E", e.offsetY);
      theme[colorKey] = "#000"; // find a way to get colorKey and add mutation to store
    }
  }
})
export default class ColorPicker extends Vue {}
</script>

<style lang="sass">
@import ./ColorPicker
</style>
