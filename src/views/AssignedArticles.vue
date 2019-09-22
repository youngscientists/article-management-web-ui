<template>
  <div>
    <base-header class="pb-4 pb-5 pt-4 pt-md-5" style="min-height: 100vh;">
      <div class="row">
        <div class="col">
          <articles-table :filter="me ? me.name : ''" title="Assigned" />
        </div>
      </div>
    </base-header>
  </div>
</template>
<script lang="ts">
import store from "@/store";
import ArticlesTable from "./Tables/ArticlesTable.vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import articlesModule from "@/store/modules/articles/articles.index";
import userModule from "@/store/modules/user/user.index";
const articles = getModule(articlesModule, store);
const user = getModule(userModule, store);
export default {
  components: {
    ArticlesTable
  },
  data() {
    return {
      articles,
      user
    };
  },
  computed: {
    me() {
      return user.me;
    }
  },
  mounted() {
    articles.getAllArticles({});
    user.GetMe();
  }
};
</script>
<style></style>
