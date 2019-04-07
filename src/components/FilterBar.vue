  <template>
  <div class="filter-bar ui basic segment grid">
    <div class="ui form">
      <div class="inline field">
        <input
          type="text"
          :value="query"
          class="three wide column"
          @keyup.enter="doFilter($event.target.value)"
          placeholder="Search..."
        >
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      filterText: ""
    };
  },
  methods: {
    doFilter(q) {
      this.$emit("filter",q);
    },
    resetFilter() {
      this.filterText = "";
    }
  },
  computed: {
    query() {
      return this.$store.state.articles.query
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  min-width: 100%;
}
</style>
