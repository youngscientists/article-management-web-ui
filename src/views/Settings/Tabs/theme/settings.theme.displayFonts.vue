<template>
  <div @click.self="$emit('clearActive')">
    <div @click="$emit('clearActive')" class="mb-3 mt-5">
      <b>{{name}}</b>
    </div>
    <div v-for="(font, key) in data" :key="key">
      <div
        v-theme="{background: 'cards', border: 'border'}"
        class="themeSettingsColor pl-4 pr-4 pt-2 pb-2"
        @click="$emit('activate', key, name)"
      >
        <div class="themeSettingsColorName">
          {{ key }}
          <span v-theme="{font: key, update: true}">{{font}}</span>
        </div>
        <div
          class="p-2"
          v-theme="{font: key, update: true}"
          v-if="active === `${name} ${key}` && canBeModified"
        >Nam eu erat metus. Donec malesuada ex ut leo sollicitudin, vitae porttitor eros iaculis. Donec eget interdum mi.</div>

        <div class="mt-3" v-if="active === `${name} ${key}` && canBeModified">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span v-theme="{background:'primaryBg', border: 'primary'}" class="input-group-text">§</span>
            </div>
            <input
              v-theme="{background:'primaryBg', border: 'primary'}"
              type="text"
              class="form-control"
              :placeholder="font"
              aria-label="Font"
              aria-describedby="basic-addon1"
              @input="$emit('fontChange', key, input[key])"
              @focus="CallCompletionHelper"
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
  },
  methods: {
    CallCompletionHelper: function(event) {
      const Fonts = [
        { title: "sans-serif" },
        { title: "Arial" },
        { title: "Helvetica" },
        { title: "Courier New" },
        { title: "Times New Roman" },
        { title: "Verdana" },
        { title: "Georgia" },
        { title: "Palatino" },
        { title: "Lucida Console" },
        { title: "Lucida Sans Unicode" },
        { title: "Tahoma" },
        { title: "monospace" },
        { title: "Garamond" },
        { title: "Impact" }
      ];
      const handleCompletion = res => {
        if (res) {
          event.srcElement.value = res.title;
          event.srcElement.dispatchEvent(new Event("input"));
          this.$completionHelper
            .Call(event.srcElement, Fonts)
            .then(handleCompletion);
        }
      };
      this.$completionHelper
        .Call(event.srcElement, Fonts)
        .then(handleCompletion);
    }
  }
})
export default class SettingsThemeDisplayFonts extends Vue {}
</script>

<style lang="sass" scoped>
@import ./settings.theme
</style>