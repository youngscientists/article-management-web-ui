<template>
  <div id="articles-container">
    <filter-bar @filter="filter"></filter-bar>
    <table-component
      :data="articles"
      :show-filter="false"
      :show-caption="false"
      @rowClick="setActive"
    >
      <table-column v-for="column in columns" :key="column" :show="column" :label="column"></table-column>
    </table-component>
    <article-modal :article="activeArticle"></article-modal>
    <hr>
  </div>
</template>

<script>
import { TableComponent, TableColumn } from "vue-table-component";
import FilterBar from "../FilterBar";
import ArticleModal from "./ArticleModal";

export default {
  name: "ArticlesContainer",
  components: {
    TableComponent,
    TableColumn,
    FilterBar,
    ArticleModal
  },
  computed: {
    states() {
      return this.$store.state.articles.states;
    },
    articles() {
      return this.$store.state.articles.articles;
    }
  },
  data() {
    return {
      columns: ["title", "subject", "type", "status"],
      activeArticle: {}
    };
  },
  methods: {
    filter(arg) {
      this.$store.dispatch("articles/list", arg);
    },
    setActive(article) {
      console.log(article);
      this.$data.activeArticle = article.data;
    },
    //...
    // when the pagination data is available, set it to pagination component
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    // when the user click something that causes the page to change,
    // call "changePage" method in Vuetable, so that that page will be
    // requested from the API endpoint.
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    }
  }
};
</script>

<style lang="scss">
th {
  text-align: left;
}

.table-component__th--sort-asc::after {
  content: "";
}

.table-component__th--sort-desc::after {
  content: "";
}
</style>
