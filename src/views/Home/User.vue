<template>
  <div>
    <v-layout>
      <v-card contextual-style="dark" centered="true" :text-centered="true">
        <span slot="header">{{user.name}}</span>
        <div slot="body">
          <img :src="`https://www.gravatar.com/avatar/${hash}`">
          <p>You are currently a
            <strong>{{user.level}}</strong> member of the
            <strong>{{user.position}}</strong> team.
          </p>
        </div>
        <div slot="footer">Need to make changes?</div>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
import VLayout from "@/layouts/Minimal.vue";
import VCard from "@/components/Card.vue";
import md5 from "md5";

export default {
  name: "HomeUser",
  components: {
    VLayout,
    VCard
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    hash() {
      return md5(this.$store.state.user.email);
    }
  },
  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
