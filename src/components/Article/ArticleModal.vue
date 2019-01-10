<template>
  <div class="remodal" data-remodal-id="article.id">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h1>{{article.title}}</h1>
    <h3>{{article.title | article.subject}}</h3>
    <small>Deadline: {{article.deadline}}</small>
    <input type="email" name="Author Email" :value="article.author.email" readonly="readonly">
    <a
      data-article-action="contact"
      :href="`mailto:${article.author.email}`"
      class="button button-blue"
    >
      <i class="fa fa-envelope" aria-hidden="true"></i> Contact Author
    </a>

    <hr>

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

    <hr>

    <p>
      Change status from
      <span :value="article.status">{{article.status}}</span> to:
      <StatusOptions selected="article.status"></StatusOptions>

      <button class="button button-green updatestatus" data-toast="update">
        <i class="fa fa-check" aria-hidden="true"></i> Update
      </button>
    </p>

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
    <hr>
    <hr>
    <p>Additional Notes:</p>
    <textarea v-model="article.notes"></textarea>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    article: {
      editor: {},
      author: {}
    }
  }
};
</script>

<style>
</style>