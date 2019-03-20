<template>
  <div>
    <v-layout>
      <v-card :text-centered="false" :fullwidth="true">
        <!--<div v-for="article in articles" :key="article.id">{{article.title}}</div>-->
        <div slot="body">
          <toolbar></toolbar>
          <articles-container></articles-container>
        </div>
      </v-card>
    </v-layout>

    <modal v-if="modals.help" @close="modals.help = false">
      <h1 slot="header">Help</h1>
      <div slot="body">
        <p>
          Welcome to the
          <a href="https://ysjournal.com" target="_blank">Young Scientists Journal</a> article management system. To gain access, you must be registered with the
          journal as an editor. If you are not an editor and wish to become one, please send an email to:
          <code>chief.editor@ysjournal.com</code>
          <br>
        </p>
        <p>
          If you are already an editor but your email is not recognised,
          notify the production team immediately on the
          <code>#productionteam</code>
          <a href="https://ysjournal.slack.com" target="_blank">Slack</a> channel.
        </p>
      </div>
    </modal>
  </div>
</template>

<script>
import VLayout from "@/layouts/FullWidth.vue";
import VCard from "@/components/Card.vue";
import Modal from "@/components/Modal.vue";
import ArticlesContainer from "@/components/Article/ArticlesContainer.vue";
import Toolbar from "@/components/Toolbar";

export default {
  name: "HomeIndex",
  components: {
    VLayout,
    Modal,
    ArticlesContainer,
    VCard,
    Toolbar
  },
  computed: {
    articles() {
      return this.$store.state.articles.articles;
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
    if (!this.$store.state.articles.articles) {
      this.$store.dispatch("articles/list");
    }
  }
};
</script>

<style>
</style>
