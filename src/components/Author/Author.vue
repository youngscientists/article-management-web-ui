<template>
  <div class="section author">
    <img class="profile" :src="profile">
    <h3>{{author.name}}</h3>
    <input type="email" name="Author Email" :value="author.email" readonly="readonly">
    <a class="button" :href="`mailto:${author.email}`">
      <i class="fa fa-envelope" aria-hidden="true"></i> Contact Author
    </a>
  </div>
</template>

<script>
import md5 from "md5";

export default {
  name: "Author",
  props: {
    author: {}
  },
  computed: {
    profile() {
      return `https://www.gravatar.com/avatar/${md5(
        this.author.email || "default"
      )}?s=128&d=identicon`;
    }
  }
};
</script>

<style lang="scss" scoped>
.author {
  input,
  a {
    margin-bottom: 8px;
  }
  text-align: center;
}
</style>
