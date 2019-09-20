<template>
  <div @click.self="$emit('clearActive')">
    <div @click="$emit('clearActive')" class="mb-3 mt-5">
      <b>{{name}}</b>
    </div>
    <div v-for="(color, key) in data" :key="key">
      <div
        v-theme="{background: 'cards', border: 'border'}"
        class="themeSettingsColor pl-4 pr-4 pt-2 pb-2"
        @click="$emit('activate', key, name)"
      >
        <div class="themeSettingsColorName">
          {{ key }}
          <span class="themeSettingsColorPatch" :style="{'background': color}"></span>
        </div>
        <div class="mt-3" v-if="active === `${name} ${key}` && canBeModified">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span v-theme="{background:'primaryBg', border: 'primary'}" class="input-group-text">#</span>
            </div>
            <input
              v-theme="{background:'primaryBg', border: 'primary'}"
              type="text"
              class="form-control"
              :placeholder="color.replace('#', '')"
              aria-label="Color"
              aria-describedby="basic-addon1"
              @input="$emit('colorChange', key, type, input[key])"
              v-model="input[key]"
              spellcheck="false"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    name: String,
    data: {},
    type: String,
    canBeModified: Boolean,
    active: String
  },
  data() {
    return {
      input: {}
    };
  }
})
export default class SettingsThemeDisplayColors extends Vue {}
</script>

<style lang="sass" scoped>
@import ./settings.theme
</style>