<template>
  <div id="themeSettingsMain">
    <div class="container" id="themeSettingsScroll">
      <div v-for="(color, key) in GetTheme" :key="key">
        <div class="themeSettingsColor" v-theme="{background: 'cards'}" @click="active = key">
          <div class="themeSettingsColorName">
            <b v-theme="{color: 'primaryFont'}">{{key}}</b>
            <div class="themeSettingsColorPatch" :style="{'background': color}"></div>
          </div>

          <div v-if="active === key">
            <ColorPicker :color="new sColor(color).Get()" :colorKey="key"></ColorPicker>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import store from "../../../store";
import ColorPicker from "@/components/ColorPicker/ColorPicker";
import sColor from "s.color";
export default {
  name: "Theme",
  components: {
    ColorPicker: ColorPicker
  },
  data() {
    return {
      active: "primary",
      sColor: sColor
    };
  },
  computed: {
    GetTheme() {
      return store.state.theme;
    }
  }
};
</script>

<style lang="sass">
@import ./Theme
</style>
