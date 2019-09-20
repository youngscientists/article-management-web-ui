<template>
  <div id="COMPLETION_HELPER_CONTAINER" class="completionContainer" v-if="$completionHelper.show">
    <div>Test completionHelper</div>
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