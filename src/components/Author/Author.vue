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
export default {
  name: "Author",
  props: {
    author: {},
    profile: String
  }
};
</script>

<style lang="scss" scoped>
input,
a {
  margin-bottom: 8px;
}
</style>
