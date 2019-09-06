<template>
  <div class="card shadow" v-theme="{background: 'primaryBg'}">
    <div class="card-header border-0" v-theme="{background: 'primaryBg'}">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" v-theme="{background: 'primaryBg', color: 'primaryFont'}">{{title}}</h3>
        </div>
        <!-- <div class="col text-right">
          <base-button type="primary" size="sm">See all</base-button>
        </div>-->
      </div>
    </div>
    <div class="pr-4 pl-4">
      <base-input
        class="input-group-alternative mb-3"
        placeholder="Search"
        addon-left-icon="fas fa-search"
      ></base-input>
    </div>

    <div class="table-responsive">
      <base-table
        v-theme="{color: 'accentFont'}"
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
            <span class="name text-sm">{{row.title}}</span>
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
    </div>

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
    tableData: []
  }
})
export default class ArticlesTable extends Vue {
  name: "articles-table";
}
</script>
<style lang="sass" scoped>
</style>
