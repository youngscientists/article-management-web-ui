<template>
  <div id="editors-container">
    <filter-bar @filter="filter"></filter-bar>
    <table-component
      :data="editors"
      :show-filter="false"
      :show-caption="false"
      @rowClick="navigateTo"
    >
      <table-column show="name" label="Name"></table-column>
      <table-column show="email" label="Email" :hidden="isMobile()"></table-column>
      <table-column show="position" label="Team"></table-column>
      <table-column show="level" label="Level" :hidden="isMobile()"></table-column>
      <table-column show="currentlyEditing" label="Assigned" :hidden="isMobile()"></table-column>
      <table-column show="totalEdited" label="Total Edited" :hidden="isMobile()"></table-column>
    </table-component>
    <hr>
  </div>
</template>

<script>
import { TableComponent, TableColumn } from "vue-table-component";
import FilterBar from "../FilterBar";
import isMobileMixin from "@/mixins/isMobile";

export default {
  name: "EditorsContainer",
  mixins: [isMobileMixin],
  components: {
    TableComponent,
    TableColumn,
    FilterBar
  },
  computed: {
    editors() {
      return this.$store.state.editors.editors;
    }
  },
  data() {
    return {
      columns: ["date", "title", "subject", "type", "status"]
    };
  },
  methods: {
    filter(arg) {
      this.$store.dispatch("editors/list", arg);
    },
    navigateTo(row) {
      this.$router.push(`/editors/${row.data.id}`);
    }
  }
};
</script>

<style lang="scss">
table {
  table-layout: fixed;
}
.table-component__th--sort-asc::after {
  content: "(asc)";
}

.table-component__th--sort-desc::after {
  content: "(desc)";
}

th,
td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e1e1e1;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  min-width: 100px;
}
th:first-child,
td:first-child {
  padding-left: 0;
}
th:last-child,
td:last-child {
  padding-right: 0;
}

th:nth-child(1),
th:nth-child(3),
th:nth-child(4),
th:nth-child(5),
td:nth-child(1),
td:nth-child(3),
td:nth-child(4),
td:nth-child(5) {
  width: 15%;
}

td:nth-child(2),
td:nth-child(2) {
  width: 40%;
}
</style>
