<template>
  <div id="articles-container">
    <vuetable ref="vuetable" :fields="columns" :data="articles" :api-mode="false"></vuetable>

    <!-- <input type="text" name="search" placeholder="Search">
    <table style="width:100%" id="articles-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Author</th>
          <th>Category</th>
          <th>Type</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <article-row v-for="article in articles" :key="article.id" :article="article"></article-row>
      </tbody>
    </table>-->
    <hr>
  </div>
</template>

<script>
import Vuetable from "vuetable-2/src/components/Vuetable";

export default {
  name: "ArticlesContainer",
  components: {
    Vuetable
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
      columns: ["title", "subject", "type", "status"]
    };
  }
};
</script>

<style lang="scss">
th {
  text-align: left;
}
</style>
