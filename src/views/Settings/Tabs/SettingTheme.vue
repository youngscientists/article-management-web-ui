<template>
  <div id="themeSettingsMain">
    <div>
      <base-button @click="changeTheme">Change</base-button>
    </div>
    <div id="themeSettingsScroll" class="container">
      <div v-for="(color, key) in GetThemeColors" :key="key">
        <div v-theme="{background: 'cards'}" class="themeSettingsColor" @click="active = key">
          <div class="themeSettingsColorName">
            <b v-theme="{color: 'primaryFont'}">{{ key }}</b>
            <div class="themeSettingsColorPatch" :style="{'background': color}" />
          </div>
          <div v-if="active === key">
            <ColorPicker :color="StringToRGB(color)" :color-key="key" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import store from "@/store";
import { getModule } from "vuex-module-decorators";
import themeModule from "@/store/modules/theme/theme.index";

import ColorPicker from "@/components/ColorPicker/ColorPicker.vue";
import { StringToRGB } from "s.color";
@Component({
  components: {
    ColorPicker: ColorPicker
  },
  data() {
    return {
      active: "",
      StringToRGB: StringToRGB,
      theme: getModule(themeModule, this.$store)
    };
  },
  computed: {
    GetThemeColors() {
      return this.$data.theme.themes[this.$data.theme.currentTheme].colors;
    },
    GetThemes() {
      return this.$data.theme.themes;
    }
  },
  methods: {
    changeTheme: function() {
      this.$store.state.theme.currentTheme = "light";
    }
  }
})
export default class SettingTheme extends Vue {}
</script>

<style lang="sass">
@import ./SettingTheme
</style>
