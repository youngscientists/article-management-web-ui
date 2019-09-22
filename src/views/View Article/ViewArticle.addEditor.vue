<template>
  <div>
    <div class="container">
      <div v-for="(editor, key) in Editors" :key="key">
        <div
          class="m-1 add-editor-item"
          v-theme="{
          border: 'border', 
          background: selected[key] === undefined ? 'primaryBg' : 'primary', 
          hover: {
            background: selected[key] === undefined ? 'primaryHover' : 'primaryFocus', 
            },
          update: [
          {type: 'background', value: selected[key] === undefined ? 'primary' : 'primaryBg'},
          {type: 'hover', value: {
            background: selected[key] === undefined ? 'primaryFocus' : 'primaryHover', 
            },}
          ]}"
          @click="select(key)"
        >{{editor.name}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import store from "@/store";
import { getModule } from "vuex-module-decorators";
import userModule from "@/store/modules/user/user.index";

@Component({
  props: {
    showModal: Boolean
  },
  data() {
    return {
      selected: {},
      userModule
    };
  },
  computed: {
    Editors() {
      return getModule(userModule, store).editors;
    }
  },
  methods: {
    select(key) {
      this.$set(
        this.$data.selected,
        key,
        this.$data.selected[key] === undefined ? true : undefined
      );
      console.log("A", this.$data.selected);
    }
  },
  mounted() {
    getModule(userModule, store).GetEditors();
  }
})
export default class ViewArticleAddEditor extends Vue {}
</script>

<style lang="sass" scoped>
.container
  max-height: calc( 100vh - 350px  )
  overflow: auto
.add-editor-item
  cursor: pointer
  border-bottom: solid 1px #0000
  padding: 0.1rem 1rem
  border-top-left-radius: 3px
  border-top-right-radius: 3px
</style>