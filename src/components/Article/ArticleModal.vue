<template>
  <div class="remodal" data-remodal-id="this.props.id">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h1>{this.props.title}</h1>
    <h3>{this.props.title | {this.props.subject</h3>
    <small>Deadline: {this.props.deadline}</small>
    <input type="email" name="Author Email" value="this.props.author.email" readonly="readonly">
    <a
      data-article-action="contact"
      href="`mailto:${this.props.author.email}`"
      class="button button-blue"
    >
      <i class="fa fa-envelope" aria-hidden="true"></i> Contact Author
    </a>

    <hr>

    <input
      type="text"
      class="editorName"
      name="Editor Name"
      value="this.props.editor.name"
      placeholder="Editor Name"
    >
    <input
      type="email"
      name="Editor Email"
      value="this.props.editor.email"
      placeholder="Editor Email"
    >
    <button class="button button-black assign" data-toast="assign">
      <i class="fa fa-user" aria-hidden="true"></i> Assign
    </button>

    <hr>

    <p>
      Change status from
      <span value="this.props.status">{this.props.status}</span> to:
      <StatusOptions selected="this.props.status"></StatusOptions>

      <button class="button button-green updatestatus" data-toast="update">
        <i class="fa fa-check" aria-hidden="true"></i> Update
      </button>
    </p>

    <a href="https://docs.google.com/document/u/0/d/${this.props.id}" target="_blank">
      <button data-article-action="edit" class="button">
        <i class="fa fa-eye" aria-hidden="true"></i> Read
      </button>
    </a>
    <a href="this.props.markingGrid" target="_blank">
      <button data-article-action="mark" class="button">
        <i class="fa fa-comment" aria-hidden="true"></i> Mark
      </button>
    </a>
    <a href="`https://drive.google.com/drive/folders/${this.props.folderId}`" target="_blank">
      <button data-article-action="folder" class="button">
        <i class="fa fa-folder" aria-hidden="true"></i> Folder
      </button>
    </a>
    <a
      href="`https://docs.google.com/document/u/0/d/${this.props.id}export?format=docx`"
      class="button-disabled"
    >
      <button data-article-action="download" data-toast="download" class="button">
        <i class="fa fa-cloud-download" aria-hidden="true"></i> Download
      </button>
    </a>
    <hr>
    {{this.props.copyright}}
    <hr>
    <p>Additional Notes:</p>
    <textarea v-model="this.props.notes"></textarea>
  </div>
</template>

<script>
import StatusOptions from "./StatusOptions";
import LoadingSpinner from "./LoadingSpinner";

export default {
  name: "Article",
  props: {
    title: String,
    subject: String,
    type: String,
    status: String,
    id: String,
    deadline: String,
    note: String,
    folderId: String,
    markingGrid: String,
    copyright: String,
    date: String
  }
};
</script>

<style>
</style>