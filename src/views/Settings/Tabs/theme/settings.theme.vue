<template>
  <div id="themeSettingsMain" @click.self="active = ''">
    <div class="text-center mb-3">
      <h1>
        <b>{{GetCurrentTheme.name}}</b>
      </h1>
    </div>

    <div class="d-flex justify-content-center">
      <div class="p-1" v-for="(Theme, key) in GetThemes" :key="key">
        <base-button v-if="key !== GetCurrentThemeName" @click="changeTheme(key)">{{key}}</base-button>
        <base-button
          type="primary"
          v-if="key === GetCurrentThemeName"
          @click="changeTheme(key)"
        >{{key}}</base-button>
      </div>
    </div>
    <div id="themeSettingsScroll" class="container" @click.self="active = ''">
      <div class="d-flex align-content-center mb-4">
        <base-switch
          :value="GetCurrentTheme.invertImageIcon"
          class="mr-3"
          :disabled="!GetCurrentTheme.canBeModified"
          @click="changeInvertImageIcon"
        ></base-switch>
        <b>Invert Logo</b>
      </div>

      <display-fonts
        name="Fonts"
        type="changeNotificationCurrentColor"
        :data="GetCurrentTheme.fonts"
        :canBeModified="GetCurrentTheme.canBeModified"
        :active="active"
        v-on:activate="setActive"
        v-on:clearActive="active = ''"
        v-on:fontChange="fontChange"
      ></display-fonts>
      <display-colors
        name="Colors"
        type="changeNotificationCurrentColor"
        :data="GetThemeColors"
        :canBeModified="GetCurrentTheme.canBeModified"
        :active="active"
        v-on:activate="setActive"
        v-on:clearActive="active = ''"
        v-on:colorChange="colorChange"
      ></display-colors>
      <display-colors
        name="Status Badge Colors"
        type="changeBadgeCurrentColor"
        :data="GetCurrentTheme.badgeColors.status"
        :canBeModified="GetCurrentTheme.canBeModified"
        :active="active"
        v-on:activate="setActive"
        v-on:colorChange="colorChange"
      ></display-colors>
      <display-colors
        name="Notification Colors"
        type="changeNotificationCurrentColor"
        :data="GetCurrentTheme.notificationColors"
        :canBeModified="GetCurrentTheme.canBeModified"
        :active="active"
        v-on:activate="setActive"
        v-on:colorChange="colorChange"
      ></display-colors>
      <div class="mb-3 mt-5" @click="active = ''">
        <b>Export Theme Data</b>
      </div>
      <base-button type="primary" @click="ExportTheme">Export</base-button>
    </div>
  </div>
</template>
  
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import themeModule from "@/store/modules/theme/theme.index";
import { StringToRGB, isValidHex } from "s.color";
import { UpdateTheme, SaveTheme, ThemeTransition } from "@/Theme/Theme.Utility";

import displayColors from "./settings.theme.displayColors.vue";
import displayFonts from "./settings.theme.displayFonts.vue";

@Component({
  components: {
    displayColors,
    displayFonts
  },
  data() {
    return {
      active: "",
      StringToRGB,
      UpdateTheme,
      ThemeTransition,
      SaveTheme,
      isValidHex,
      getModule,
      colorInput: {}
    };
  },
  computed: {
    GetThemeColors() {
      const theme = getModule(themeModule, this.$store);
      return theme.themes[theme.currentTheme].colors;
    },
    GetThemes() {
      return getModule(themeModule, this.$store).themes;
    },
    GetCurrentThemeName() {
      return getModule(themeModule, this.$store).currentTheme;
    },
    GetCurrentTheme() {
      const theme = getModule(themeModule, this.$store);
      return theme.themes[theme.currentTheme];
    }
  },
  methods: {
    changeTheme: function(key: string) {
      const theme = getModule(themeModule, this.$store);
      if (theme.currentTheme !== key) {
        getModule(themeModule, this.$store).changeCurrent(key);
        this.$data.ThemeTransition();
        this.$data.UpdateTheme();
        this.$data.SaveTheme();
      }
    },
    colorChange: function(key: string, type: string, input: string) {
      const theme = getModule(themeModule, this.$store);
      if (input && this.$data.isValidHex("#".concat(input))) {
        theme[type]({
          key,
          value: "#".concat(input)
        });
        this.$data.UpdateTheme();
        this.$data.SaveTheme();
      }
    },
    fontChange: function(key: string, type: string, input: string) {
      const theme = getModule(themeModule, this.$store);
      if (input) {
        theme.changeCurrentFont({
          key,
          value: input
        });
        this.$data.UpdateTheme();
        this.$data.SaveTheme();
      }
    },
    changeInvertImageIcon: function() {
      getModule(themeModule, this.$store).toggleInvertImageIcon();
      this.$data.UpdateTheme();
      this.$data.SaveTheme();
    },
    ExportTheme: function() {
      const theme = getModule(themeModule, this.$store);
      window.navigator.clipboard.writeText(
        JSON.stringify(theme.themes[theme.currentTheme])
      );
    },
    setActive: function(key, name) {
      this.$data.active = `${name} ${key}`;
    }
  }
})
export default class SettingTheme extends Vue {}
</script>

<style lang="sass" scoped>
@import ./settings.theme
</style>
