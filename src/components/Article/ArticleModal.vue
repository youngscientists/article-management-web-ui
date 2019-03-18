<template>
  <modal v-if="article" @close="article = null">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h1 slot="header">{{article.title}}</h1>
    <div slot="body" class="body">
      <h3>{{`${article.type} | ${article.subject}`}}</h3>
      <small v-if="article.deadline">Deadline: {{article.deadline}}</small>

      <div class="section author">
        <input type="email" name="Author Email" :value="article.author.email" readonly="readonly">
        <a :href="`mailto:${article.author.email}`">
          <button class="button button-blue">
            <i class="fa fa-envelope" aria-hidden="true"></i> Contact Author
          </button>
        </a>
      </div>

      <div class="section editor">
        <input
          type="text"
          class="editorName"
          name="Editor Name"
          :value="article.editor.name"
          placeholder="Editor Name"
          readonly="readonly"
        >
        <input
          type="email"
          name="Editor Email"
          v-model="article.editor.email"
          placeholder="Editor Email"
        >
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
          <option
            v-for="state of article.possibleStates"
            :key="state.name"
            :value="state.name"
          >{{state.name}}</option>
        </select>
        
        <button class="button button-green updatestatus" @click="update">
          <i class="material-icons" aria-hidden="true">update</i> Update
        </button>
      </div>

      <div class="section view">
        <a :href="article.link" target="_blank">
          <button data-article-action="edit" class="button">
            <i class="material-icons">remove_red_eye</i> Read
          </button>
        </a>
        <a :href="article.markingGrid" target="_blank">
          <button data-article-action="mark" class="button">
            <i class="material-icons">edit</i> Mark
          </button>
        </a>
        <a :href="`https://drive.google.com/drive/folders/${article.folderId}`" target="_blank">
          <button data-article-action="folder" class="button">
            <i class="material-icons">folder</i> Folder
          </button>
        </a>
        <a
          :href="`https://docs.google.com/document/d/${article.id}/export?format=docx`"
          class="button-disabled"
        >
          <button data-article-action="download" data-toast="download" class="button">
            <i class="material-icons">cloud_download</i> Download
          </button>
        </a>
      </div>
      <div class="notes">
        <textarea v-model="article.notes" placeholder="Additional notes"></textarea>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "Article",
  components: {
    Modal
  },
  props: {
    article: null
  },
  data() {
    return {
      status: null
    };
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
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  display: inline-block;
}

.body {
  div {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  i {
    vertical-align: middle;
  }

  .section {
    border-top: 1px solid grey;
    padding: 16px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
    grid-column-gap: 16px;

    input,
    button {
      height: 40px;
    }
  }
}
</style>