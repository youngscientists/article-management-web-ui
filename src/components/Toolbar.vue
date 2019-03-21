<template>
  <div class="toolbar">
    <button class="button" @click="refresh">Refresh</button>
    <button class="button">New Article</button>
    <button class="button" v-if="senior">New Editor</button>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  components: {},
  methods: {
    refresh() {
      this.$store.dispatch("articles/list");
    }
  },
  computed: {
    senior() {
      return this.$store.getters["user/senior"];
    }
  }
};
</script>

<style lang="scss">
.toolbar {
  width: 100%;
  height: 50px;
  background: white;

  .button {
    margin-right: 8px;
  }
}
</style>
