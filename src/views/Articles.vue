<template>
  <div>
    <base-header
      class="pb-4 pb-5 pt-4 pt-md-5"
      style="min-height: 100vh;"
    >
      <div class="row">
        <div class="col">
          <articles-table
            title="Articles"
            :table-data="GetArticles"
          />
        </div>
      </div>
    </base-header>
  </div>
</template>
<script>
import store from "@/store";
import ArticlesTable from "./Tables/ArticlesTable";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import articlesModule from "@/store/modules/articles/articles.index";
const articles = getModule(articlesModule, store);
export default {
  components: {
    ArticlesTable
  },
  data() {
    return {
      articles
    };
  },
  computed: {
    GetArticles() {
      return articles.allArticles;
    }
  },
  mounted() {
    articles.getAllArticles({ vm: this });
  }
};
</script>
<style></style>
