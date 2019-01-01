<template>
  <div class="remodal" data-remodal-id="{`editor-${this.props.id}`}">
    <button data-remodal-action="close" class="remodal-close"></button>
    <h1>{this.props.firstname} {this.props.lastname}</h1>
    <p>
      Currently editing
      <strong>{this.props.editing}</strong>
      articles.
      Has edited ${this.props.edited} articles in total.
    </p>
    <input type="email" name="Editor Email" value="{this.props.email}" readonly="readonly">
    <a
      data-article-action="contact"
      href="{`mailto:${this.props.email}`}"
      class="button button-blue"
    >
      <i class="fa fa-envelope" aria-hidden="true"></i> Contact Editor
    </a>
  </div>
</template>

<script>
export default {
  name: "Editor",
  props: {
    firstname: String,
    lastname: String,
    editing: Number,
    edited: Number,
    email: String
  }
};
</script>

<style>
</style>