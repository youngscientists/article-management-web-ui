<template>
  <div>
    <base-header
      type="gradient-success"
      class="pb-6 pb-8 pt-5 pt-md-8"
    />

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <articles-table />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col" />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import ArticlesTable from "./Tables/ArticlesTable";

export default {
  components: {
    ArticlesTable
  },
  data() {
    return {};
  }
};
</script>
<style></style>
