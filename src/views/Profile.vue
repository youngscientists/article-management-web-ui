<template>
  <base-header class="pb-4 pb-5 pt-4 pt-md-5" style="min-height: 100vh;">
    <div class="row">
      <div class="col">
        <div class="p-5 card" v-theme="{background: 'primaryBg'}">TODO Profile Page</div>
      </div>
    </div>
  </base-header>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
// import { apiGET, apiPUT, apiPOST } from "../utility/api/api";

@Component({
  data() {
    return {};
  },
  mounted() {
    // apiGET("authors")
    //   .then(res => res.json())
    //   .then(res => console.log("AUTHORS", res));
    // apiGET("editors")
    //   .then(res => res.json())
    //   .then(res => console.log("EDITOR", res));
    // apiGET("user/me")
    //   .then(res => res.json())
    //   .then(res => console.log("ME", res));
    // apiGET("editors/me")
    //   .then(res => res.json())
    //   .then(res => console.log("E/ME", res));
    // apiPUT(
    //   "articles",
    //   { title: "test" },
    //   { id: "41381c9e-0111-4f85-9fb1-66f75f2d4438" }
    // )
    //   .then(res => res.json())
    //   .then(res => console.log("ARTICLES/PUT", res));
  }
})
export default class Profile extends Vue {}
</script>
<style></style>
