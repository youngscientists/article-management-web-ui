<template>
  <div>
    <v-layout>
      <v-card :text-centered="false" :fullwidth="true">
        <!--<div v-for="article in articles" :key="article.id">{{article.title}}</div>-->
        <div slot="body">
          <article-page></article-page>
        </div>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
import VLayout from "@/layouts/FullWidth.vue";
import VCard from "@/components/Card.vue";
import ArticlePage from "@/components/Article/ArticlePage.vue";

export default {
  name: "HomeArticle",
  components: {
    VLayout,
    VCard,
    ArticlePage
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data() {
    return {
      modals: {
        help: false
      }
    };
  },
  /**
   * The methods the page can use.
   */
  methods: {},
  mounted() {
    this.$store.dispatch("articles/get", this.id);
  }
};
</script>

<style>
</style>
