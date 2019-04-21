<template>
  <div class="toolbar">
    <material-button text="Refresh" icon="refresh" @click.native="refresh" :disabled="isRefreshing"></material-button>
    <material-button text="New Editor" icon="add" @click.native="newEditor"></material-button>
    <material-button text="New Article" icon="add" @click.native="newArticle"></material-button>
  </div>
</template>

<script>
import MaterialButton from "./Buttons/MaterialButton";

export default {
  name: "Toolbar",
  components: { MaterialButton },
  methods: {
    refresh() {
      this.$store.dispatch("articles/list");
    },
    newEditor() {
      this.$store.dispatch("editors/openCreate");
    },
    newArticle() {
      this.$store.dispatch("articles/create");
    }
  },
  computed: {
    senior() {
      return this.$store.getters["user/senior"];
    },
    isRefreshing() {
      return this.$store.state.articles.fetching;
    }
  }
};
</script>

<style lang="scss">
@media only screen and (max-width: 768px) {
  .toolbar {
    .button {
      width: 100%;
      margin-bottom: 8px;
    }
  }
}

.toolbar {
  width: 100%;
  padding: 8px 0;
  background: white;

  .button {
    margin-right: 8px;
  }
}
</style>
