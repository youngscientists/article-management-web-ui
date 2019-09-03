<template>
  <div id="themeSettingsMain">
    <div class="container" id="themeSettingsScroll">
      <div v-for="(color, key) in GetTheme" :key="key">
        <div class="themeSettingsColor">
          <b>{{key}}</b>

          <div class="themeSettingsColorPatch" :style="{'background': color}"></div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import store from "../../../store";
export default {
  name: "Theme",
  data() {
    return {
      message: "Hello"
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
