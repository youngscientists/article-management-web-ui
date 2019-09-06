<template>
  <div>
    <base-header class="pb-4 pb-5 pt-4 pt-md-5" style="min-height: 100vh;">
      <div class="row">
        <div class="col">
          <articles-table title="Articles" :table-data="GetArticles"></articles-table>
        </div>
      </div>
    </base-header>
  </div>
</template>
<script>
import { apiGET } from "@/utility/api/api";
import store from "@/store";
// Tables
import ArticlesTable from "./Tables/ArticlesTable";

export default {
  components: {
    ArticlesTable
  },
  data() {
    return {
      hmm: [1, 2, 3]
    };
  },
  computed: {
    stats() {
      return {
        totalArticles: {
          count: 450,
          change: 12.4
        },
        articlesEdited: {
          count: 102,
          change: -3.2
        },
        articlesEditedByYou: {
          count: 2,
          change: 32
        }
      };
    },
    GetArticles() {
      return store.state.articles.allArticles;
    }
  },

  mounted() {
    store.dispatch("articles/getAllArticles", { vm: this });
  }
};
</script>
<style></style>
