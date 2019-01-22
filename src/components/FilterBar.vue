  <template>
  <div class="filter-bar ui basic segment grid">
    <div class="ui form">
      <div class="inline field">
        <input
          type="text"
          v-model="filterText"
          class="three wide column"
          @keyup.enter="doFilter"
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
    doFilter() {
      this.$emit("filter", this.$data.filterText);
    },
    resetFilter() {
      this.filterText = "";
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  min-width: 100%;
}
</style>
