<template>
  <div>
    <div class="view-article-root text-center w-100 pt-4 position-absolute">
      <h1>
        <b v-theme="{ color: 'secondaryFont' }">VIEW ARTICLE</b>
      </h1>
    </div>
    <div v-if="Data === null" class="view-article-container d-flex justify-content-center">
      <div class="card p-4 d-flex justify-content-center" v-theme="{ background: 'primaryBg' }">
        <div class="loader"></div>
      </div>
    </div>
    <div v-if="Data !== null" class="view-article-container d-flex justify-content-center">
      <div class="card w-100 p-4" v-theme="{ background: 'primaryBg', update: ['background'] }">
        <div class="border-bottom" v-theme="{ border: 'border' }">
          <div class="mb-2 d-flex justify-content-sm-between">
            <b class="h2">{{ Data.title }}</b>
            <base-button type="primary" class="m-1" icon="fas fa-arrow-left" @click="back">Back</base-button>
          </div>
          <div class="h5">
            <div>
              <span class="h5">
                {{ Data.type }}
                {{ Data.subject !== null ? "|".concat(Data.subject.name) : "" }}
                | {{ new Date(Data.date).toDateString() }}
              </span>
            </div>
          </div>
        </div>
        <div class="view-article-content mt-2 mb-4">
          <div>
            <div
              class="card view-article-author"
              v-theme="{ background: 'primaryBg', shadow: 'sm' }"
              v-for="(author, key) in Data.authors"
              :key="key"
            >
              <div class="p-4 d-flex justify-content-center">
                <div class="view-article-img">
                  <img
                    class="img-fluid rounded d-block"
                    alt="Profile"
                    src="https://cdna.artstation.com/p/assets/images/images/016/840/134/large/leonard-grosoli-render-01.jpg?1553674810"
                  />
                </div>
              </div>

              <div class="text-center mb-4">{{ author.name }}</div>
              <base-input
                class="input-group-alternative mb-4"
                placeholder="email"
                :value="author.email"
              />
              <div class="text-center">
                <a
                  v-theme="{
                    color: 'secondaryFont',
                    background: 'button',
                    shadow: false,
                    focus: {
                      background: 'primaryFocus',
                      border: 'primaryFocus'
                    },
                    hover: {
                      background: 'primaryHover',
                      border: 'primaryHover'
                    },
                    border: 'button'
                  }"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn"
                  :href="'mailto:'.concat(author.email)"
                >Contact Author</a>
              </div>
            </div>
          </div>

          <div class="p-4">
            <div>
              <div>
                <b>Status</b>
                <article-status class="ml-2" :status="Data.status"></article-status>
              </div>
              <div class="mt-3 ml-3 mr-3">
                <view-article-change-status></view-article-change-status>
                <base-button type="primary" class="mt-1" icon="fas fa-sync">Update</base-button>
              </div>
            </div>
            <div class="mt-4">
              <div>
                <b>Editors</b>
              </div>
              <div class="mt-3 ml-3 mr-3" v-for="(editor, key) in Data.editors" :key="key">
                <div class="mt-1 view-article-editor">
                  <div class="d-flex align-items-center">
                    <img
                      class="avatar"
                      src="https://cdna.artstation.com/p/assets/images/images/016/840/134/large/leonard-grosoli-render-01.jpg?1553674810"
                    />
                    <div class="ml-3">{{ editor.name }}</div>
                  </div>

                  <div class="d-flex align-items-center view-article-editor-input">
                    <base-input
                      class="input-group-alternative mb-0 ml-3 mr-3 w-100"
                      placeholder="Email"
                      :value="editor.email"
                    />
                    <i class="fas fa-trash" style="cursor: pointer;" @click="removeEditor(key)" />
                  </div>
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
                <b>Actions</b>
              </div>
              <div class="mt-3 mb-3 ml-3">
                <base-button
                  type="primary"
                  class="m-1"
                  icon="fas fa-book-open"
                  @click="action('read')"
                >Read</base-button>
                <base-button
                  type="primary"
                  class="m-1"
                  icon="fas fa-pen"
                  @click="action('mark')"
                >Mark</base-button>
                <base-button
                  type="primary"
                  class="m-1"
                  icon="ni ni-folder-17"
                  @click="action('folder')"
                >Folder</base-button>
                <base-button
                  type="primary"
                  class="m-1"
                  icon="ni ni-cloud-download-95"
                  @click="action('download')"
                >Download</base-button>
              </div>
            </div>

            <div class="mt-4">
              <b>Notes</b>
              <base-input
                class="input-group-alternative m-3"
                placeholder="Additional Notes"
                :value="Data.notes"
              />
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
import ViewArticleChangeStatus from "./ViewArticle.ChangeStatus.vue";
const articles = getModule(articlesModule, store);

@Component({
  components: {
    ViewArticleChangeStatus
  },
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
  methods: {
    back: function() {
      this.$router.push({ name: "home" });
    },
    selectStatus: function(status) {
      articles.currentSetStatus(status);
    },
    removeEditor: function(key) {
      articles.currentRemoveEditor(key);
    },
    action: function(type: "read" | "mark" | "folder" | "download") {
      switch (type) {
        case "read":
          window.open(
            `https://docs.google.com/document/d/${articles.currentArticle.id}/edit`
          );
          break;
        case "mark":
          window.open(
            `https://docs.google.com/document/d/${articles.currentArticle.markingGridId}/edit`
          );
          break;
        case "folder":
          window.open(
            `https://drive.google.com/drive/folders/${articles.currentArticle.folderId}`
          );
          break;
        case "download":
          window.open(
            `https://docs.google.com/document/d/${articles.currentArticle.id}/export?format=docx`
          );
          break;
      }
    }
  },
  mounted() {
    apiGET("articles", { id: this.$route.params.article })
      .then(res => res.json())
      .then(res => {
        apiHandleError(res);
        articles.current(res);
      });
  }
})
export default class ViewArticle extends Vue {}
</script>
<style lang="sass" scoped>
.view-article-img
  max-width: 100px
  max-height: 100px
.view-article-content
  display: grid
  grid-template-columns: 1.2fr 3fr
  height: calc( 100vh - 320px )
  overflow: auto
.view-article-author
  margin: 2rem
  padding: 4rem
  padding-top: 1.2rem
  padding-bottom: 2rem

.view-article-container
  padding-top: 5.5rem
  padding-bottom: 2rem
  padding-left: 64rem
  padding-right: 64rem
  transition: padding 250ms ease

.view-article-editor
  display: grid
  grid-template-columns: auto 300px

@media screen and ( max-width: 3900px )
  .view-article-container
    padding-left: 16rem
    padding-right: 16rem
@media screen and ( max-width: 2000px )
  .view-article-container
    padding-left: 6rem
    padding-right: 6rem
@media screen and ( max-width: 1360px )
  .view-article-author
    margin: 1rem
    padding: 0.5rem
    padding-top: 1.2rem
    padding-bottom: 2rem
@media screen and ( max-width: 1000px )
  .view-article-container
    padding-left: 2rem
    padding-right: 2rem
  .view-article-content
    grid-template-columns: 1fr
  .view-article-author
    margin: 2rem
    padding: 4rem
    padding-top: 1.2rem
    padding-bottom: 2rem
@media screen and ( max-width: 760px )
  .view-article-editor
    grid-template-columns: auto
    .view-article-editor-input
      margin-top: 1rem

@media screen and ( max-width: 600px )
  .view-article-container
    padding-left: 0rem
    padding-right: 0rem
  .view-article-root
    padding-left: 0
    padding-right: 0
  .view-article-author
    margin: 1rem
    padding: 0.5rem
    padding-top: 1.2rem
    padding-bottom: 2rem
  .view-article-content
    height: calc( 100vh - 420px )

.dropdown-item
  cursor: pointer
</style>