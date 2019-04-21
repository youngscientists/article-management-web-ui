<template>
  <div>
    <v-layout>
      <v-card :text-centered="false" :fullwidth="true">
        <!--<div v-for="article in articles" :key="article.id">{{article.title}}</div>-->
        <div slot="body">
          <new-editor-form></new-editor-form>
        </div>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
import VLayout from "@/layouts/FullWidth.vue";
import VCard from "@/components/Card.vue";
import NewEditorForm from "@/components/Editors/NewEditorForm.vue";

export default {
  name: "NewEditor",
  components: {
    VLayout,
    VCard,
    NewEditorForm
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
  methods: {}
};
</script>

<style>
</style>
