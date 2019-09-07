<template>
  <div class="card shadow" v-theme="{background: 'primaryBg'}">
    <div class="card-header border-0" v-theme="{background: 'primaryBg'}">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" v-theme="{background: 'primaryBg', color: 'primaryFont'}">{{title}}</h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm">Refresh</base-button>
        </div>
      </div>
    </div>
    <div class="pr-4 pl-4">
      <base-input
        class="input-group-alternative mb-3"
        placeholder="Search"
        addon-left-icon="fas fa-search"
      ></base-input>
    </div>
    <div class="pr-4 pl-4 pb-2 articlesSortBy border-bottom" v-theme="{border: 'muted'}">
      <b>Sort By:</b>
      <a target="_blank" rel="noopener noreferrer">Title</a>
      <a target="_blank" rel="noopener noreferrer">Date</a>
      <a target="_blank" rel="noopener noreferrer">Type</a>
      <a target="_blank" rel="noopener noreferrer">Status</a>
      <a target="_blank" rel="noopener noreferrer">Modified</a>
    </div>

    <card-grid :data="tableData"></card-grid>

    <div class="card-footer d-flex justify-content-end" v-theme="{background: 'primaryBg'}">
      <!-- <base-pagination total="30"></base-pagination> -->
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    type: {
      type: String
    },
    title: { type: String, default: "Articles" },
    tableData: Array
  }
})
export default class ArticlesTable extends Vue {}
</script>
<style lang="sass" scoped>
.articlesSortBy
  display: flex
  justify-content: space-between
  margin: 1rem 0
  a
    cursor: pointer
@media screen and ( max-width: 450px )
  .articlesSortBy
    flex-direction: column
    text-align: center
    a
      margin: 0.1rem 0
</style>
