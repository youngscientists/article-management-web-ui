<template>
  <b
    v-theme="{color: 'secondaryFont'}"
    class="rounded p-2 pl-3 pr-3"
    :style="'background: '.concat(Color.status[status] !== undefined ? Color.status[status] : Color.default,';')"
  >{{status}}</b>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import store from "@/store";
import { getModule } from "vuex-module-decorators";
import themeModule from "@/store/modules/theme/theme.index";
const theme = getModule(themeModule, store);

@Component({
  props: {
    status: String
  },
  data() {
    return {
      theme
    };
  },
  computed: {
    Color() {
      return theme.themes[theme.currentTheme].badgeColors;
    }
  }
})
export default class ArticleStatus extends Vue {}
</script>

<style lang="sass" scoped>

</style>