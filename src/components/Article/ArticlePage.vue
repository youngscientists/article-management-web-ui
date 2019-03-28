<template>
  <div class="article">
    <div slot="header" class="header">
      <h1>{{article.title}}</h1>
      <h3>{{`${article.type} | ${article.subject}`}}</h3>
    </div>
    <div slot="body" class="body row">
      <div class="small column">
        <author :author="article.author" :profile="profile"></author>
      </div>
      <div class="big column">
        <small v-if="article.deadline">Deadline: {{article.deadline}}</small>

        <div class="section editor">
            <h3>Editor</h3>
          <input
            type="text"
            class="editorName"
            name="Editor Name"
            :value="editorName"
            placeholder="Editor Name"
            readonly="readonly"
          >
          <autocomplete
            type="email"
            name="Editor Email"
            :value="article.editor.email"
            placeholder="Editor Email"
            v-on:input="fetchEditors($event)"
            v-on:set="setEditor($event)"
          ></autocomplete>

          <material-button icon="person" text="Assign" @click.native="assign"></material-button>
        </div>

        <div class="section status">
            <h3>Status</h3>
                  <span class="badge" :style="statusColor">In Review</span>

          <select v-model="status">
            <option v-for="state of states" :key="state.state" :value="state.state" :selected="state.state == article.status">{{state.state}}</option>
          </select>

          <material-button icon="update" text="Update" @click.native="update"></material-button>
        </div>

        <div class="section view">
          <h3>Actions</h3>
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
          <h3>Notes</h3>
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
      status: null,
      editorName_: "",
      editorEmail: String
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
    },
    editorName() {
        return this.editorName_ || this.article.editor.name
    },
    statusColor() {
        const c = this.states.find(s => this.article.status == s.state)
        return `background-color: #${c ? c.color : "8a8a8a"}`
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
      this.$store.dispatch("editors/list", event);
    },
    setEditor(event) {
      this.editorName_ = event.name;
      this.article.editor.email = event.email;
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  display: inline-block;
}

.status {
    h3,.badge {
        display: inline-block;
        vertical-align: middle;
    }

    .badge {
        background: grey;
        color: white;
        margin: 16px;
    }
}

.body {
  border-top: 1px solid grey;

  i {
    vertical-align: middle;
  }

  .section {
    padding: 16px 0px;

    input,
    button,
    a {
      height: 40px;
      margin-bottom: 8px;
    }

    button,
    a {
      margin-right: 8px;
      margin-top: 8px;
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