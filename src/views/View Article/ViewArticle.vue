<template>
  <div>
    <modal :show.sync="showAddEditorModal" modal-classes="modal-lg">
      <template slot="header">
        <h1 class="modal-title">
          <b v-theme="{ color: 'primaryFont' }">Add Editors</b>
        </h1>
      </template>
      <view-article-add-editor v-on:close-modal="showAddEditorModal = false"></view-article-add-editor>
    </modal>

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
            <b class="view-article-title">{{ Data.title }}</b>
          </div>
          <div class="h5">
            <div>
              <span class="h5">
                {{ Data.type }}
                {{ Data.subject !== null ? "|".concat(Data.subject.name) : "" }}
                | {{ new Date(Data.date).toDateString() }}
              </span>
            </div>
            <base-button
              :size="window.width <= 1000 ? 'sm': ''"
              type="primary"
              class="m-1 mt-3"
              icon="fas fa-arrow-left"
              @click="back"
            >Back</base-button>
          </div>
        </div>
        <div class="view-article-content mt-2 mb-4">
          <div class="p-4">
            <div>
              <div>
                <b>Status</b>
                <article-status class="ml-2" :status="Data.status"></article-status>
              </div>
              <div class="mt-3 ml-3 mr-3">
                <view-article-change-status></view-article-change-status>
                <base-button
                  :size="window.width <= 1000 ? 'sm': ''"
                  type="primary"
                  class="mt-1"
                  icon="fas fa-sync"
                  @click="updateStatus(Data.status)"
                >Update</base-button>
              </div>
            </div>
            <div class="mt-4">
              <div>
                <b>Editors</b>
              </div>
              <view-article-users
                :data="Data.editors"
                :showDelete="true"
                v-on:remove="removeEditor"
              ></view-article-users>

              <div class="m-3">
                <span
                  class="view-article-link"
                  v-theme="{hover: {color: 'muted'}, focus: {color: 'primaryHover'}}"
                  @click="showAddEditorModal = !showAddEditorModal"
                >
                  <i class="fas fa-plus mr-2" />
                  <u>Add Editors</u>
                </span>
              </div>
            </div>

            <div class="mt-4">
              <div>
                <b>Actions</b>
              </div>
              <div class="mt-3 mb-3 ml-3">
                <base-button
                  :size="window.width <= 1000 ? 'sm': ''"
                  type="primary"
                  class="m-1"
                  icon="fas fa-book-open"
                  @click="action('read')"
                >Read</base-button>
                <base-button
                  :size="window.width <= 1000 ? 'sm': ''"
                  type="primary"
                  class="m-1"
                  icon="fas fa-pen"
                  @click="action('mark')"
                >Mark</base-button>
                <base-button
                  :size="window.width <= 1000 ? 'sm': ''"
                  type="primary"
                  class="m-1"
                  icon="ni ni-folder-17"
                  @click="action('folder')"
                >Folder</base-button>
                <base-button
                  :size="window.width <= 1000 ? 'sm': ''"
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
            <div>
              <b>Authors</b>
            </div>
            <view-article-users :data="Data.authors"></view-article-users>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { apiGET, apiHandleError, apiPUT } from "@/utility/api/api";
import store from "@/store";

import { getModule } from "vuex-module-decorators";
import articlesModule from "@/store/modules/articles/articles.index";
const articles = getModule(articlesModule, store);

import ViewArticleAddEditor from "./ViewArticle.addEditor.vue";
import ViewArticleUsers from "./ViewArticle.users.vue";
import ViewArticleChangeStatus from "./ViewArticle.ChangeStatus.vue";

@Component({
  components: {
    ViewArticleChangeStatus,
    ViewArticleAddEditor,
    ViewArticleUsers
  },
  data() {
    return {
      articles,
      showAddEditorModal: false,
      window: {
        width: 0,
        height: 0
      }
    };
  },
  created() {
    // @ts-ignore
    window.addEventListener("resize", this.handleResize);
    // @ts-ignore
    this.handleResize();
  },
  destroyed() {
    // @ts-ignore
    window.removeEventListener("resize", this.handleResize);
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
    handleResize() {
      this.$data.window.width = window.innerWidth;
      this.$data.window.height = window.innerHeight;
    },
    selectStatus: function(status) {
      articles.currentSetStatus(status);
    },
    removeEditor: function(key) {
      articles.currentRemoveEditor({
        editor: key,
        articleID: this.$route.params.article
      });
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
    },

    async updateStatus(newStatus: string) {
      const res = await apiPUT(
        "articles",
        { status: newStatus },
        { id: this.$route.params.article }
      );
      this.$notify("Successfully Updated the article Status");
      articles.getAllArticles({ force: true });
    }
  },
  mounted() {
    apiGET("articles", { id: this.$route.params.article })
      .then(res => res.json())
      .then(res => {
        if (apiHandleError(res)) {
          articles.current(res);
        } else {
          this.$notify({ type: "warning", message: "Access Denied" });
        }
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
  overflow: auto

.view-article-author-container
  display: grid
  grid-template-columns: repeat(auto-fill, 50%)
.view-article-title
  font-size: 1.4rem

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
  .view-article-title
    font-size: 1.2rem
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
  .view-article-author-container
    grid-template-columns: auto
    .view-article-title
      font-size: 1rem
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

.view-article-link,
.dropdown-item
  user-select: none
  cursor: pointer
</style>