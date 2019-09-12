<template>
  <div>
    <div class="mt--4">
      <tabs>
        <tab-pane active="true" title="Theme">
          <theme />
        </tab-pane>
        <!-- <tab-pane title="Tab2">aad</tab-pane>
        <tab-pane title="Tab3">awd</tab-pane>-->
      </tabs>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import Theme from "./Tabs/SettingTheme";
@Component({
  components: {
    Theme
  }
})
export default class Settings extends Vue {}
</script>
