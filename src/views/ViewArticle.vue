<template>
  <div>
    <div class="text-center w-100 pt-4 position-absolute">
      <h1>
        <b>VIEW ARTICLE</b>
      </h1>
    </div>
    <div class="view-article-container d-flex justify-content-center">
      <div class="card w-100 p-4" v-theme="{background: 'primaryBg'}">test</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { apiGET } from "@/utility/api/api";
@Component({
  mounted() {
    apiGET(
      "articles",
      "title:Est maiores beatae et voluptas explicabo temporibus"
    )
      .then(res => res.json())
      .then(res => {
        console.log("RES", res);
      });
  }
})
export default class ViewArticle extends Vue {}
</script>
<style lang="sass" scoped>
.view-article-container
  padding-top: 5.5rem
  padding-bottom: 6rem
  padding-left: 64rem
  padding-right: 64rem
  transition: padding 250ms ease


@media screen and ( max-width: 3900px )
  .view-article-container
    padding-left: 16rem
    padding-right: 16rem
@media screen and ( max-width: 2000px )
  .view-article-container
    padding-left: 6rem
    padding-right: 6rem
@media screen and ( max-width: 1000px )
  .view-article-container
    padding-left: 2rem
    padding-right: 2rem
@media screen and ( max-width: 600px )
  .view-article-container
    padding-left: 0.2rem
    padding-right: 0.2rem

</style>