REVIEW Can be removed!?
<template>
  <div>
    <div class="container tableCardContainer pl-4 pr-4">
      <div
        v-for="(row, key) in data"
        :key="key"
      >
        <card v-theme="{color: 'primaryFont'}">
          <template slot="header" />
          <div class="tableCardBody">
            <div class="tableCardHeader">
              <h3 v-theme="{color: 'primaryFont'}">
                <b>{{ row.title }}</b>
              </h3>
            </div>
            <div class="tableCardItem">
              <b>Editor:</b>
              {{ row.editors[0].name }}
            </div>

            <div class="tableCardItem">
              <b>Subject:</b>
              {{ row.subject }}
            </div>
            <div class="tableCardItem">
              <b>Type:</b>
              {{ row.type }}
            </div>

            <div class="tableCardItem">
              <b>Status:</b>
              {{ row.status }}
            </div>
            <div class="tableCardItem">
              <b>Modified:</b>
              {{ new Date(row.modified).toDateString() }}
            </div>
            <div class="tableCardItem">
              <b>Date:</b>
              {{ new Date(row.date).toDateString() }}
            </div>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import Component from "vue-class-component";

@Component({
  props: {
    data: Array
  }
})
export default class CardGrid extends Vue {}
</script>
<style lang="sass" scoped>
.tableCardContainer
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))
  grid-gap: 1rem

.tableCardHeader
  margin-bottom: 1rem

.tableCardBody
  min-height: 280px
  .tableCardItem
    font-size: 0.95rem

</style>