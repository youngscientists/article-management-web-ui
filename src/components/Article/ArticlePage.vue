<template>
  <div class="article">
    <div slot="header" class="header">
      <h1>{{article.title}}</h1>
      <h3>{{`${article.type} | ${article.subject}`}}</h3>
      <p>{{summary}}</p>
    </div>
    <div slot="body" class="body row">
      <div class="small column">
        <author v-for="author in article.authors" :key="author.email" :author="author"></author>
      </div>
      <div class="big column">
        <small v-if="article.deadline">Deadline: {{article.deadline}}</small>

        <div class="section editor">
          <h3>Editors</h3>
          <editor
            v-for="editor in editors"
            :key="editor.email"
            :name="editor.name"
            :email="editor.email"
            v-on:set="setEditor($event)"
            v-on:remove="removeEditor($event)"
          ></editor>
          <a href="#" @click="addEditor">
            <i class="material-icons">add</i> Add Editor
          </a>

          <material-button icon="person" text="Assign" @click.native="assign"></material-button>
        </div>

        <div class="section status">
          <h3>Status</h3>
          <span class="badge" :style="statusColor">{{this.article.status}}</span>

          <select v-model="status">
            <option
              v-for="state of states"
              :key="state.state"
              :value="state.state"
              :selected="state.state == article.status"
            >{{state.state}}</option>
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
          <timed-input
            :initialValue="article.notes"
            v-on:input="updateNotes"
            placeholder="Additional notes"
            :time="1000"
          ></timed-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import author from "../Author/Author.vue";
import editor from "../Editors/Editor";
import MaterialButton from "../Buttons/MaterialButton.vue";
import TimedInput from "../Inputs/TimedInput.vue";

export default {
  name: "ArticlePage",
  components: {
    author,
    editor,
    MaterialButton,
    TimedInput
  },
  props: {},
  data() {
    return {
      status: "",
      editorName_: "",
      editorEmail: String,
      editors_: [],
      notes: ""
    };
  },
  computed: {
    editors: {
      get() {
        return this.editors_.length === 0
          ? this.article.editors
          : this.editors_;
      },
      set(value) {
        this.editors_ = value;
      }
    },
    raw() {
      return this.$store.state.articles.activeArticle;
    },
    article() {
      return JSON.parse(
        JSON.stringify(this.$store.state.articles.activeArticle)
      );
    },

    states() {
      return this.$store.state.articles.states;
    },
    editorName() {
      return this.editorName_ || this.article.editor.name;
    },
    statusColor() {
      const c = this.states.find(s => this.article.status == s.state);
      return `background-color: #${c ? c.color : "8a8a8a"}`;
    },
    summary() {
      return this.article.summary || "";
    }
  },
  methods: {
    assign() {
      this.$store.dispatch("articles/assign", {
        id: this.article.id,
        editors: this.editors
      });
    },
    update() {
      if (!this.status) return;
      this.$store.dispatch("articles/update", {
        id: this.article.id,
        props: {
          status: this.status
        }
      });
    },
    refresh() {
      this.$store.dispatch("articles/get", this.article.id);
    },
    setEditor({ email, name, oldEmail }) {
      let i = this.editors.findIndex(e => e.email === (oldEmail || ""));
      if (i != -1) {
        this.editors[i] = { email, name };
      }
    },
    removeEditor({ email }) {
      this.editors = this.editors.filter(e => e.email != email);
    },
    updateNotes(event) {
      this.notes = event;
      this.$store.dispatch("articles/update", {
        id: this.article.id,
        props: { notes: this.notes }
      });
    },
    addEditor() {
      if (!this.editors.find(e => e.email === "")) {
        this.editors_ = this.editors.slice();
        this.editors_.push({ email: "", name: "" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  display: inline-block;
}

.status {
  h3,
  .badge {
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

@media only screen and (min-width: 768px) {
  .row {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 32px;
  }
}
</style>