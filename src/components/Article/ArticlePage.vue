<template>
  <div class="article">
    <h1 slot="header">{{article.title}}</h1>
    <div slot="body" class="body row">
      <div class="small column">
        <author :author="article.author" :profile="profile"></author>
      </div>
      <div class="big column">
        <h3>{{`${article.type} | ${article.subject}`}}</h3>
        <small v-if="article.deadline">Deadline: {{article.deadline}}</small>

        <div class="section editor">
          <input
            type="text"
            class="editorName"
            name="Editor Name"
            :value="article.editor.name"
            placeholder="Editor Name"
            readonly="readonly"
          >
          <autocomplete
            type="email"
            name="Editor Email"
            v-model="article.editor.email"
            placeholder="Editor Email"
            v-on:input="fetchEditors($event)"
          ></autocomplete>
          <button class="button button-black assign" @click="assign">
            <i class="material-icons" aria-hidden="true">person</i> Assign
          </button>
        </div>

        <div class="section status">
          <span>
            Change status from
            <span :value="article.status">{{article.status}}</span> to:
          </span>
          <select selected="article.status" v-model="status">
            <option v-for="state of states" :key="state.state" :value="state.state">{{state.state}}</option>
          </select>
          
          <button class="button button-green updatestatus" @click="update">
            <i class="material-icons" aria-hidden="true">update</i> Update
          </button>
        </div>

        <div class="section view">
          <a :href="article.link" target="_blank">
            <material-button icon="remove_red_eye" text="Read"></material-button>
          </a>
          <a :href="article.markingGrid" target="_blank">
            <material-button icon="edit" text="Mark"></material-button>
          </a>
          <a :href="`https://drive.google.com/drive/folders/${article.folderId}`" target="_blank">
            <material-button icon="folder" text="Folder"></material-button>
          </a>
          <a
            :href="`https://docs.google.com/document/d/${article.id}/export?format=docx`"
            class="button-disabled"
          >
            <material-button icon="cloud_download" text="Download"></material-button>
          </a>
        </div>
        <div class="notes">
          <textarea v-model="article.notes" placeholder="Additional notes"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from "md5";
import author from "../Author/Author.vue";
import autocomplete from "../Inputs/Autocomplete.vue";
import MaterialButton from "../Buttons/MaterialButton.vue";

export default {
  name: "ArticlePage",
  components: {
    author,
    autocomplete,
    MaterialButton
  },
  props: {},
  data() {
    return {
      status: null
    };
  },
  computed: {
    raw() {
      return this.$store.state.articles.activeArticle;
    },
    article() {
      return this.$store.state.articles.activeArticle;
    },
    profile() {
      return `https://www.gravatar.com/avatar/${md5(
        this.article.author.email || "default"
      )}?s=128&d=identicon`;
    },
    states() {
      return this.$store.state.articles.states;
    }
  },
  methods: {
    assign() {
      this.$store.dispatch("articles/assign", {
        id: this.article.id,
        email: this.article.editor.email
      });
    },
    update() {
      if (!this.status) return;
      this.$store.dispatch("articles/update", {
        id: this.article.id,
        status: this.status
      });
    },
    refresh() {
      this.$store.dispatch("articles/get", this.article.id);
    },
    fetchEditors(event) {
      console.log(event);
      this.$store.dispatch("editors/list");
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  display: inline-block;
}

.body {
  border-top: 1px solid grey;
  div {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  i {
    vertical-align: middle;
  }

  .section {
    padding: 16px 0px;

    input,
    button,
    a {
      height: 40px;
      width: 100%;
      margin-bottom: 8px;
    }

    &.editor,
    &.status,
    &.view {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
      grid-column-gap: 16px;
    }
  }

  .author {
    input {
      display: block;
    }
  }
}

.row {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 32px;
}
</style>