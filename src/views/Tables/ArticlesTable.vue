<template>
  <div v-theme="{background: 'primaryBg', shadow: true}" class="card">
    <div v-theme="{background: 'primaryBg'}" class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 v-theme="{background: 'primaryBg', color: 'primaryFont'}" class="mb-0">{{ title }}</h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm" @click="refresh">Refresh</base-button>
        </div>
      </div>
    </div>
    <div class="pr-4 pl-4">
      <base-input
        class="input-group-alternative mb-3"
        placeholder="Search"
        addon-left-icon="fas fa-search"
      />
    </div>
    <div class="test">
      <div v-theme="{border: 'border'}" class="article-table article-table-header pl-4 pr-4 pt-1">
        <div class="article-table-h-3">Date</div>
        <div>Title</div>
        <div class="article-table-h-1">Subject</div>
        <div class="article-table-h-2">Type</div>
        <div class="article-table-h-4">Editors</div>
        <div class="article-table-h-5">Status</div>
      </div>
      <div v-for="(row, key) in tableData" :key="key">
        <div
          v-theme="{border: 'border', hover: {
            background: 'cards'
          }}"
          class="article-table article-table-item pl-4 pr-4 pt-2 pb-2"
          @click="activate( row.id)"
        >
          <div
            v-theme="{color: 'mutedFont'}"
            class="article-table-h-3"
          >{{ new Date(row.date).toDateString() }}</div>
          <div scope="row">
            <b>{{ row.title }}</b>
          </div>
          <div v-theme="{color: 'mutedFont'}" class="article-table-h-1">{{ row.subject }}</div>
          <div v-theme="{color: 'mutedFont'}" class="article-table-h-2">{{ row.type }}</div>
          <div
            v-theme="{color: 'mutedFont'}"
            class="article-table-h-4"
          >{{ row.editors.map(e => e.name).join(', ') }}</div>
          <div v-theme="{color: 'mutedFont'}" class="article-table-h-5">
            <article-status class="ml-2" :status="row.status"></article-status>
          </div>
        </div>
      </div>
    </div>

    <div v-theme="{background: 'primaryBg'}" class="card-footer"></div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import store from "@/store";

import { getModule } from "vuex-module-decorators";
import articlesModule from "@/store/modules/articles/articles.index";

import router from "@/router";

@Component({
  props: {
    type: {
      type: String
    },
    title: { type: String, default: "Articles" },
    tableData: Array
  },
  methods: {
    activate: function(id) {
      router.push({ name: "view", params: { article: id } });
      console.log("Clicked", id);
    },
    refresh: function() {
      const articles = getModule(articlesModule, this.$store);
      articles.getAllArticles({ vm: this, refresh: true });
    }
  }
})
export default class ArticlesTable extends Vue {}
</script>
<style lang="sass" scoped>
@mixin Hide
  height: 0
  width: 0
  overflow: hidden

.article-table-item
  cursor: pointer
.article-table-header
  font-weight: 600

.article-table-details
  grid-column-start: 1
  grid-column-end: 7

.article-table
  display: grid
  //                   Date Title Subject Type Editor Status
  grid-template-columns: 130px 1fr 100px 140px 160px 210px
  border-bottom: 1px solid grey
  transition: background 250ms ease

@media screen and ( max-width: 1430px )
  .article-table
    grid-template-columns: 130px 1fr 0 140px 160px 210px
    .article-table-h-1
      @include Hide

@media screen and ( max-width: 1330px )
  .article-table
    grid-template-columns: 130px 1fr 0 0 160px 210px
    .article-table-h-2
      @include Hide
@media screen and ( max-width: 1230px )
  .article-table
    grid-template-columns: 0 1fr 0 0 160px 210px
    .article-table-h-3
      @include Hide
@media screen and ( max-width: 1080px )
  .article-table
    grid-template-columns: 0 1fr 0 0 0 210px
    .article-table-h-4
      @include Hide
@media screen and ( max-width: 550px )
  .article-table
    grid-template-columns: 0 1fr 0 0 0 0
    .article-table-h-5
      @include Hide

// .articlesSortBy
//   display: flex
//   justify-content: space-between
//   margin: 1rem 0
//   a
//     cursor: pointer
// @media screen and ( max-width: 450px )
//   .articlesSortBy
//     flex-direction: column
//     text-align: center
//     a
//       margin: 0.1rem 0

</style>
