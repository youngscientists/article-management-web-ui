<template>
  <div class="editor">
    <div class="name">
      <img :src="profile">
      <span class="editorName">{{name}}</span>
    </div>

    <autocomplete
      type="email"
      name="Editor Email"
      :value="email"
      placeholder="Editor Email"
      v-on:input="fetchEditors($event)"
      v-on:set="setEditor($event)"
    ></autocomplete>
  </div>
</template>

<script>
import autocomplete from "../Inputs/Autocomplete";
import md5 from "md5";

export default {
  name: "Editor",
  components: {
    autocomplete
  },
  props: {
    name: String,
    email: String
  },
  computed: {
    profile() {
      return `https://www.gravatar.com/avatar/${md5(
        this.email || "default"
      )}?s=128&d=identicon`;
    }
  }
};
</script>

<style lang="scss" scoped>
div.editor {
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-column-gap: 16px;
  margin-bottom: 8px;

  .name {
    padding: 4px;
    img {
      height: 32px;
      border-radius: 4px;
    }

    span {
      padding: 8px;
      font-weight: 600;
    }

    img,
    span {
      vertical-align: middle;
    }
  }
}
</style>
