<template>
  <div
    id="COMPLETION_HELPER_CONTAINER"
    class="completionContainer"
    :class="$completionHelper.show ? $completionHelper.theme.container: ''"
  >
    <div class="completionItemWrapper" v-if="$completionHelper.show">
      <div v-for="(item, key) in $completionHelper.items" :key="key">
        <div
          class="completionItem"
          :id="`COMPLETION_HELPER_ITEM_${key}`"
          :class="$completionHelper.active === key ? $completionHelper.theme.active  : $completionHelper.theme.item"
          v-if="new RegExp(`^${$completionHelper.filter}`, 'i').test(item.title)"
          @click="$completionHelper.completed(item)"
        >{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class TestComponent extends Vue {}
</script>

<style lang="sass" scoped>
@import ./completionHelper.component
</style>


