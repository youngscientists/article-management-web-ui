<template>
  <div>
    <div class="text-center w-100 pt-4 position-absolute">
      <h1>
        <b>VIEW ARTICLE</b>
      </h1>
    </div>
    <div v-if="Data === undefined" class="view-article-container d-flex justify-content-center">
      <div class="card p-4 d-flex justify-content-center" v-theme="{background: 'primaryBg'}">
        <div class="loader"></div>
      </div>
    </div>
    <div v-if="Data !== undefined" class="view-article-container d-flex justify-content-center">
      <div class="card w-100 p-4" v-theme="{background: 'primaryBg', update: ['background']}">
        <div class="border-bottom" v-theme="{border: 'border'}">
          <div class="mb-3">
            <b class="h2">{{Data.title}}</b>
          </div>
          <div class="h5">
            <span class="h5">Type / Subject / Date?</span>
            <div class="float-right text-center">
              <base-button
                class="mt-1 mb-3 ml-1"
                icon="fas fa-book-open"
                v-theme="{background: 'primary', hover: {background: 'primaryHover'}, border: 'primaryBg'}"
              >Read</base-button>
              <base-button
                class="mt-1 mb-3 ml-1"
                icon="fas fa-pen"
                v-theme="{background: 'primary', hover: {background: 'primaryHover'}, border: 'primaryBg'}"
              >Mark</base-button>
              <base-button
                class="mt-1 mb-3 ml-1"
                icon="ni ni-folder-17"
                v-theme="{background: 'primary', hover: {background: 'primaryHover'}, border: 'primaryBg'}"
              >Folder</base-button>
              <base-button
                class="mt-1 mb-3 ml-1"
                icon="ni ni-cloud-download-95"
                v-theme="{background: 'primary', hover: {background: 'primaryHover'}, border: 'primaryBg'}"
              >Download</base-button>
            </div>
          </div>
        </div>
        <div class="view-article-content mt-2 mb-4">
          <div>
            <div class="p-4 d-flex justify-content-center">
              <div class="view-article-img">
                <img
                  class="img-fluid rounded d-block"
                  src="https://cdna.artstation.com/p/assets/images/images/016/840/134/large/leonard-grosoli-render-01.jpg?1553674810"
                />
              </div>
            </div>

            <div class="text-center mb-4">Name</div>
            <base-input class="input-group-alternative mb-4" placeholder="email"></base-input>
            <div class="text-center">
              <base-button
                v-theme="{background: 'button', hover: {background: 'secondary'}, border: 'primaryBg'}"
              >Contact Author</base-button>
            </div>
          </div>
          <div class="p-4">
            <div>
              <div>
                <b>Editors</b>
              </div>
              <div class="mt-3 ml-3 mr-3">
                <div class="mt-1 d-flex align-items-center">
                  <img
                    class="avatar"
                    src="https://cdna.artstation.com/p/assets/images/images/016/840/134/large/leonard-grosoli-render-01.jpg?1553674810"
                  />
                  <div class="ml-3">Name</div>
                  <base-input class="input-group-alternative mb-0 ml-3 mr-3" placeholder="Email"></base-input>
                  <i class="fas fa-trash"></i>
                </div>
              </div>
              <div class="m-3">
                <i class="fas fa-plus mr-2"></i>
                <u>Add Editor</u>
                <base-button
                  class="m-3"
                  icon="fas fa-user"
                  v-theme="{background: 'primary', hover: {background: 'primaryHover'}, border: 'primaryBg'}"
                >Assign</base-button>
              </div>
            </div>
            <div class="mt-4">
              <div>
                <b>Status ---</b>
              </div>
              <base-input class="input-group-alternative mt-4 ml-3 mr-3"></base-input>
              <base-button
                class="mb-3 ml-3 mr-3"
                icon="fas fa-sync"
                v-theme="{background: 'primary', hover: {background: 'primaryHover'}, border: 'primaryBg'}"
              >Update</base-button>
            </div>
            <!--  <div class="mt-4">
              <div>
                <b>Actions</b>
              </div>
              <base-button
                class="mt-3 mb-3 ml-3"
                icon="fas fa-book-open"
                v-theme="{background: 'primary', hover: {background: 'primaryHover'}, border: 'primaryBg'}"
              >Read</base-button>
              <base-button
                class="mt-3 mb-3 ml-1"
                icon="fas fa-pen"
                v-theme="{background: 'primary', hover: {background: 'primaryHover'}, border: 'primaryBg'}"
              >Mark</base-button>
              <base-button
                class="mt-3 mb-3 ml-1"
                icon="ni ni-folder-17"
                v-theme="{background: 'primary', hover: {background: 'primaryHover'}, border: 'primaryBg'}"
              >Folder</base-button>
              <base-button
                class="mt-3 mb-3 ml-1"
                icon="ni ni-cloud-download-95"
                v-theme="{background: 'primary', hover: {background: 'primaryHover'}, border: 'primaryBg'}"
              >Download</base-button>
            </div>-->
            <div class="mt-4">
              <b>Notes</b>
              <base-input class="input-group-alternative m-3" placeholder="Additional Notes"></base-input>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { apiGET } from "@/utility/api/api";
// import store from "@/store";
@Component({
  computed: {
    Data() {
      return this.$store.state.articles.currentArticle;
    }
  },
  mounted() {
    apiGET("articles", { id: "0a0fcda0-6dd7-4cb7-a57b-16155d7b0221" })
      .then(res => res.json())
      .then(res => {
        console.log("RES", res);
        this.$store.commit("articles/current", res);
      });
  }
})
export default class ViewArticle extends Vue {}
</script>
<style lang="sass" scoped>
.view-article-img
  max-width: 400px
  max-height: 400px
.view-article-content
  display: grid
  grid-template-columns: 1.2fr 3fr


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
  .view-article-content
    grid-template-columns: 1fr
@media screen and ( max-width: 600px )
  .view-article-container
    padding-left: 0.2rem
    padding-right: 0.2rem

</style>