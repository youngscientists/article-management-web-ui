<template>
  <div>
    <div class="text-center w-100 pt-4 position-absolute">
      <h1>
        <b v-theme="{color: 'secondaryFont'}">VIEW ARTICLE</b>
      </h1>
    </div>
    <div v-if="Data === null" class="view-article-container d-flex justify-content-center">
      <div class="card p-4 d-flex justify-content-center" v-theme="{background: 'primaryBg'}">
        <div class="loader"></div>
      </div>
    </div>
    <div v-if="Data !== null" class="view-article-container d-flex justify-content-center">
      <div class="card w-100 p-4" v-theme="{background: 'primaryBg', update: ['background']}">
        <div class="border-bottom" v-theme="{border: 'border'}">
          <div class="mb-2">
            <b class="h2">{{ Data.title }}</b>
          </div>
          <div class="h5">
            <div>
              <span
                class="h5"
              >{{ Data.type }} {{ Data.subject !== null ? '|'.concat(Data.subject) : '' }} | {{ new Date(Data.date).toDateString() }}</span>
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
            <base-input class="input-group-alternative mb-4" placeholder="email" />
            <div class="text-center">
              <base-button
                v-theme="{color: 'primaryFont', background: 'button', hover: {background: 'cards', border: 'cards'}, border: 'button'}"
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
                  <base-input class="input-group-alternative mb-0 ml-3 mr-3" placeholder="Email" />
                  <i class="fas fa-trash" />
                </div>
              </div>
              <div class="m-3">
                <i class="fas fa-plus mr-2" />
                <u>Add Editor</u>
                <base-button type="primary" class="m-3" icon="fas fa-user">Assign</base-button>
              </div>
            </div>
            <div class="mt-4">
              <div>
                <b>Status</b>
                <article-status class="ml-2" :status="Data.status"></article-status>
              </div>
              <base-input class="input-group-alternative mt-4 ml-3 mr-3" />
              <base-button type="primary" class="mb-3 ml-3 mr-3" icon="fas fa-sync">Update</base-button>
            </div>
            <div class="mt-4">
              <div>
                <b>Actions</b>
              </div>
              <div class="mt-3 mb-3 ml-3">
                <base-button type="primary" class="m-1" icon="fas fa-book-open">Read</base-button>
                <base-button type="primary" class="m-1" icon="fas fa-pen">Mark</base-button>
                <base-button type="primary" class="m-1" icon="ni ni-folder-17">Folder</base-button>
                <base-button type="primary" class="m-1" icon="ni ni-cloud-download-95">Download</base-button>
              </div>
            </div>

            <div class="mt-4">
              <b>Notes</b>
              <base-input class="input-group-alternative m-3" placeholder="Additional Notes" />
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
import { apiGET, apiHandleError } from "@/utility/api/api";
import store from "@/store";

import { getModule } from "vuex-module-decorators";
import articlesModule from "@/store/modules/articles/articles.index";
const articles = getModule(articlesModule, store);

@Component({
  data() {
    return {
      articles
    };
  },
  computed: {
    Data() {
      return articles.currentArticle;
    }
  },
  mounted() {
    apiGET("articles", { id: this.$route.params.article })
      .then(res => res.json())
      .then(res => {
        apiHandleError(res);
        console.log("RES", res);
        articles.current(res);
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
  padding-bottom: 2rem
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