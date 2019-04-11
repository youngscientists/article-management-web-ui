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

    <a @click="removeEditor">
      <i data-v-6ecc48ec class="material-icons">delete_forever</i>
    </a>
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
  },
  methods: {
    fetchEditors(event) {
      this.$store.dispatch("editors/list", event);
    },
    setEditor(event) {
      const oldEmail = this.email;
      this.email = event.email;
      this.name = event.name;

      event.oldEmail = oldEmail;
      this.$emit("set", event);
    },
    removeEditor() {
      this.$emit("remove", {
        email: this.email
      });
    }
  }
};
</script>

<style lang="scss" scoped>
div.editor {
  display: grid;
  grid-template-columns: 3fr 8fr 1fr;
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

  i {
    padding: 8px;
  }
}
</style>
