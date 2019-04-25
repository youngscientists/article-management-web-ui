<template>
  <div>
    <v-layout>
      <v-card :text-centered="false" :fullwidth="true">
        <!--<div v-for="article in articles" :key="article.id">{{article.title}}</div>-->
        <div slot="body">
          <editors-container></editors-container>
        </div>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
import VLayout from "@/layouts/FullWidth.vue";
import VCard from "@/components/Card.vue";
import EditorsContainer from "@/components/Editors/EditorsContainer.vue";

export default {
  name: "Editors",
  components: {
    VLayout,
    VCard,
    EditorsContainer
  },
  computed: {
    editors() {
      return this.$store.state.editors.editors;
    }
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
  methods: {},
  
  mounted() {
    this.$store.dispatch("editors/list");
  }
};
</script>

<style>
</style>
