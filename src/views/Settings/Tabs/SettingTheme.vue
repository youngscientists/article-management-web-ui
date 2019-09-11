<template>
  <div id="themeSettingsMain">
    <div>
      <!-- TODO <base-button>Select Theme [TODO]</base-button> -->
    </div>
    <div
      id="themeSettingsScroll"
      class="container"
    >
      <div
        v-for="(color, key) in GetThemeColors"
        :key="key"
      >
        <div
          v-theme="{background: 'cards'}"
          class="themeSettingsColor"
          @click="active = key"
        >
          <div class="themeSettingsColorName">
            <b v-theme="{color: 'primaryFont'}">{{ key }}</b>
            <div
              class="themeSettingsColorPatch"
              :style="{'background': color}"
            />
          </div>
          <div v-if="active === key">
            <ColorPicker
              :color="StringToRGB(color)"
              :color-key="key"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import store from "@/store";
import ColorPicker from "@/components/ColorPicker/ColorPicker";
import { StringToRGB } from "s.color";
export default {
  name: "SettingTheme",
  components: {
    ColorPicker: ColorPicker
  },
  data() {
    return {
      active: "",
      StringToRGB: StringToRGB
    };
  },
  computed: {
    GetThemeColors() {
      return store.state.theme.themes[store.state.theme.currentTheme].colors;
    },
    GetThemes() {
      return store.state.theme.themes;
    }
  }
};
</script>

<style lang="sass">
@import ./SettingTheme
</style>
