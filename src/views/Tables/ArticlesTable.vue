<template>
  <div v-theme="{background: 'primaryBg', shadow: true}" class="card">
    <div v-theme="{background: 'primaryBg'}" class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 v-theme="{background: 'primaryBg', color: 'primaryFont'}" class="mb-0">{{ title }}</h3>
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
      />
    </div>
    <!--     <div class="pr-4 pl-4 pb-2 articlesSortBy border-bottom" v-theme="{border: 'muted'}">
      <b>Sort By:</b>
      <a target="_blank" rel="noopener noreferrer">Title</a>
      <a target="_blank" rel="noopener noreferrer">Date</a>
      <a target="_blank" rel="noopener noreferrer">Type</a>
      <a target="_blank" rel="noopener noreferrer">Status</a>
      <a target="_blank" rel="noopener noreferrer">Modified</a>
    </div>-->

    <!--  <div class="table-responsive">
      <base-table
        v-theme="{color: 'primaryFont'}"
        class="table align-items-center table-flush"
        :data="tableData"
      >
        <template slot="columns">
          <th v-theme="{border: 'muted'}">Date</th>
          <th v-theme="{border: 'muted'}">Title</th>
          <th v-theme="{border: 'muted'}">Subject</th>
          <th v-theme="{border: 'muted'}">Type</th>
          <th v-theme="{border: 'muted'}">Editor</th>
          <th v-theme="{border: 'muted'}">Status</th>
          <th v-theme="{border: 'muted'}"></th>
        </template>

        <template slot-scope="{row}">
          <td v-theme="{border: 'muted'}" class="date">{{new Date(row.date).toDateString()}}</td>
          <th v-theme="{border: 'muted'}" scope="row">
            <div>{{row.title}}</div>

            <span class="name text-sm"></span>
          </th>
          <td v-theme="{border: 'muted'}" class="subject">{{row.subject}}</td>
          <td v-theme="{border: 'muted'}" class="type">{{row.type}}</td>
          <td v-theme="{border: 'muted'}" class="editor">{{row.editors[0].name}}</td>
          <td v-theme="{border: 'muted'}">
            <badge class="badge-dot mr-4" :type="row.statusType">
              <i :class="`bg-${row.statusType}`"></i>
              <span class="status">{{row.status}}</span>
            </badge>
          </td>

          <td class="text-right" v-theme="{border: 'muted'}">
            <base-dropdown class="dropdown" position="right">
              <a
                slot="title"
                class="btn btn-sm btn-icon-only text-light"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i v-theme="{color: 'icon'}" class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <a class="dropdown-item" href="#">Delete</a>
              </template>
            </base-dropdown>
          </td>
        </template>
      </base-table>
    </div>-->
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
          @click="activate(key)"
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

    <div v-theme="{background: 'primaryBg'}" class="card-footer d-flex justify-content-end">
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
  },
  methods: {
    activate: function(key) {
      console.log("Clicked", key);
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
