<template>
  <base-dropdown>
    <base-button slot="title" class="dropdown-toggle mt-1" type="primary">Select New Status</base-button>
    <div
      type="primary"
      v-theme="{
        color: 'secondaryFont',
        hover: { background: 'primaryHover' },
        focus: { background: 'primaryFocus' }
      }"
      class="dropdown-item"
      @click="selectStatus('Rejected')"
    >Rejected</div>
    <div
      type="primary"
      v-theme="{
        color: 'secondaryFont',
        hover: { background: 'primaryHover' },
        focus: { background: 'primaryFocus' }
      }"
      class="dropdown-item"
      @click="selectStatus('Published')"
    >Published</div>
    <div
      type="primary"
      v-theme="{
        color: 'secondaryFont',
        hover: { background: 'primaryHover' },
        focus: { background: 'primaryFocus' }
      }"
      class="dropdown-item"
      @click="selectStatus('Ready to Publish')"
    >Ready to Publish</div>
    <div
      type="primary"
      v-theme="{
        color: 'secondaryFont',
        hover: { background: 'primaryHover' },
        focus: { background: 'primaryFocus' }
      }"
      class="dropdown-item"
      @click="selectStatus('Ethical Question')"
    >Ethical Question</div>
    <div
      type="primary"
      v-theme="{
        color: 'secondaryFont',
        hover: { background: 'primaryHover' },
        focus: { background: 'primaryFocus' }
      }"
      class="dropdown-item"
      @click="selectStatus('Submitted')"
    >Submitted</div>
    <div
      type="primary"
      v-theme="{
        color: 'secondaryFont',
        hover: { background: 'primaryHover' },
        focus: { background: 'primaryFocus' }
      }"
      class="dropdown-item"
      @click="selectStatus('Failed Data Check')"
    >Failed Data Check</div>
    <div
      type="primary"
      v-theme="{
        color: 'secondaryFont',
        hover: { background: 'primaryHover' },
        focus: { background: 'primaryFocus' }
      }"
      class="dropdown-item"
      @click="selectStatus('Revisions Requested')"
    >Revisions Requested</div>
    <div
      type="primary"
      v-theme="{
        color: 'secondaryFont',
        hover: { background: 'primaryHover' },
        focus: { background: 'primaryFocus' }
      }"
      class="dropdown-item"
      @click="selectStatus('Technical Review')"
    >Technical Review</div>
    <div
      type="primary"
      v-theme="{
        color: 'secondaryFont',
        hover: { background: 'primaryHover' },
        focus: { background: 'primaryFocus' }
      }"
      class="dropdown-item"
      @click="selectStatus('In Review')"
    >In Review</div>
    <div
      type="primary"
      v-theme="{
        color: 'secondaryFont',
        hover: { background: 'primaryHover' },
        focus: { background: 'primaryFocus' }
      }"
      class="dropdown-item"
      @click="selectStatus('Final Review')"
    >Final Review</div>
    <div
      type="primary"
      v-theme="{
        color: 'secondaryFont',
        hover: { background: 'primaryHover' },
        focus: { background: 'primaryFocus' }
      }"
      class="dropdown-item"
      @click="selectStatus('2nd Editor Required')"
    >2nd Editor Required</div>
    <div
      type="primary"
      v-theme="{
        color: 'secondaryFont',
        hover: { background: 'primaryHover' },
        focus: { background: 'primaryFocus' }
      }"
      class="dropdown-item"
      @click="selectStatus('Passed Data Check')"
    >Passed Data Check</div>
  </base-dropdown>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { apiGET, apiHandleError } from "@/utility/api/api";
import store from "@/store";

import { getModule } from "vuex-module-decorators";
import articlesModule from "@/store/modules/articles/articles.index";
const articles = getModule(articlesModule, store);

@Component({
  data() {
    return {
      articles
    };
  },

  methods: {
    selectStatus: function(status) {
      articles.currentSetStatus(status);
    }
  }
})
export default class ViewArticleChangeStatus extends Vue {}
</script>
<style lang="sass" scoped>
.dropdown-item
  cursor: pointer
</style>