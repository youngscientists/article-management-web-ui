<template>
  <modal v-if="article" @close="article = null">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h1 slot="header">{{article.title}}</h1>
    <div slot="body">
      <h3>{{`${article.type} | ${article.subject}`}}</h3>
      <small v-if="article.deadline">Deadline: {{article.deadline}}</small>

      <div class="author">
        <input type="email" name="Author Email" :value="article.author.email" readonly="readonly">
        <a
          data-article-action="contact"
          :href="`mailto:${article.author.email}`"
          class="button button-blue"
        >
          <i class="fa fa-envelope" aria-hidden="true"></i> Contact Author
        </a>
      </div>

      <hr>

      <div class="editor">
        <input
          type="text"
          class="editorName"
          name="Editor Name"
          :value="article.editor.name"
          placeholder="Editor Name"
        >
        <input
          type="email"
          name="Editor Email"
          :value="article.editor.email"
          placeholder="Editor Email"
        >
        <button class="button button-black assign" data-toast="assign">
          <i class="fa fa-user" aria-hidden="true"></i> Assign
        </button>
      </div>

      <hr>

      <div class="status">
        Change status from
        <span :value="article.status">{{article.status}}</span> to:
        <select selected="article.status"></select>
        
        <button class="button button-green updatestatus" data-toast="update">
          <i class="fa fa-check" aria-hidden="true"></i> Update
        </button>
      </div>

      <div class="view">
        <a :href="article.link" target="_blank">
          <button data-article-action="edit" class="button">
            <i class="fa fa-eye" aria-hidden="true"></i> Read
          </button>
        </a>
        <a :href="article.markingGrid" target="_blank">
          <button data-article-action="mark" class="button">
            <i class="fa fa-comment" aria-hidden="true"></i> Mark
          </button>
        </a>
        <a :href="`https://drive.google.com/drive/folders/${article.folderId}`" target="_blank">
          <button data-article-action="folder" class="button">
            <i class="fa fa-folder" aria-hidden="true"></i> Folder
          </button>
        </a>
        <a
          :href="`https://docs.google.com/document/u/0/d/${article.id}export?format=docx`"
          class="button-disabled"
        >
          <button data-article-action="download" data-toast="download" class="button">
            <i class="fa fa-cloud-download" aria-hidden="true"></i> Download
          </button>
        </a>
      </div>
      <hr>
      <hr>
      <p>Additional Notes:</p>
      <textarea v-model="article.notes"></textarea>
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
  }
};
</script>

<style lang="scss" scoped>
input {
  display: inline-block;
}

.editor {
  input {
    width: 40%;
  }
}
</style>