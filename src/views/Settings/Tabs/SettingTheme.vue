<template>
  <div id="themeSettingsMain">
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
    <div id="themeSettingsScroll" class="container">
      <div class="d-flex align-content-center mb-4">
        <base-switch
          :value="GetCurrentTheme.invertImageIcon"
          class="mr-3"
          :disabled="!GetCurrentTheme.canBeModified"
          @click="changeInvertImageIcon"
        ></base-switch>
        <b>Invert Logo</b>
      </div>
      <div class="mb-1">
        <b>Colors</b>
      </div>
      <div v-for="(color, key) in GetThemeColors" :key="key">
        <div
          v-theme="{background: 'cards', border: 'border'}"
          class="themeSettingsColor pl-4 pr-4 pt-2 pb-2"
          @click="active = key "
        >
          <div class="themeSettingsColorName">
            {{ key }}
            <span class="themeSettingsColorPatch" :style="{'background': color}"></span>
          </div>
          <div class="mt-3" v-if="active === key && GetCurrentTheme.canBeModified">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span
                  v-theme="{background:'primaryBg', border: 'primary'}"
                  class="input-group-text"
                >#</span>
              </div>
              <input
                v-theme="{background:'primaryBg', border: 'primary'}"
                type="text"
                class="form-control"
                :placeholder="color.replace('#', '')"
                aria-label="Color"
                aria-describedby="basic-addon1"
                @input="colorChange($event, key)"
                v-model="colorInput[key]"
                spellcheck="false"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mb-1 mt-4">
        <b>Badge Colors</b>
      </div>
      <div v-for="(color, key) in GetThemeBadgeColors" :key="key">
        <div
          v-theme="{background: 'cards', border: 'border'}"
          class="themeSettingsColor pl-4 pr-4 pt-2 pb-2"
          @click="active = key "
        >
          <div class="themeSettingsColorName">
            {{ key }}
            <span class="themeSettingsColorPatch" :style="{'background': color}"></span>
          </div>
          <div class="mt-3" v-if="active === key && GetCurrentTheme.canBeModified">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span
                  v-theme="{background:'primaryBg', border: 'primary'}"
                  class="input-group-text"
                >#</span>
              </div>
              <input
                v-theme="{background:'primaryBg', border: 'primary'}"
                type="text"
                class="form-control"
                :placeholder="color.replace('#', '')"
                aria-label="Color"
                aria-describedby="basic-addon1"
                @input="badgeColorChange($event, key)"
                v-model="colorInput[key]"
                spellcheck="false"
              />
            </div>
          </div>
        </div>
      </div>
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

@Component({
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
    GetThemeBadgeColors() {
      const theme = getModule(themeModule, this.$store);
      return theme.themes[theme.currentTheme].badgeColors.status;
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
    colorChange: function(e: InputEvent, key) {
      const theme = getModule(themeModule, this.$store);
      if (
        this.$data.colorInput[key] &&
        this.$data.isValidHex("#".concat(this.$data.colorInput[key]))
      ) {
        theme.changeCurrentColor({
          key,
          value: "#".concat(this.$data.colorInput[key])
        });
        this.$data.UpdateTheme();
        this.$data.SaveTheme();
      }
    },
    badgeColorChange: function(e: InputEvent, key) {
      const theme = getModule(themeModule, this.$store);
      if (
        this.$data.colorInput[key] &&
        this.$data.isValidHex("#".concat(this.$data.colorInput[key]))
      ) {
        theme.changeBadgeCurrentColor({
          key,
          value: "#".concat(this.$data.colorInput[key])
        });
        this.$data.UpdateTheme();
        this.$data.SaveTheme();
      }
    },
    changeInvertImageIcon: function() {
      getModule(themeModule, this.$store).toggleInvertImageIcon();
      this.$data.UpdateTheme();
      this.$data.SaveTheme();
    }
  }
})
export default class SettingTheme extends Vue {}
</script>

<style lang="sass">
@import ./SettingTheme
</style>
