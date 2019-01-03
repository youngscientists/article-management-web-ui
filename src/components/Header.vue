<template>
  <div class="header">
    <a href="/">
      <img src="//assets.ysjournal.com/img/head-transparent.png">
    </a>
    <h1 id="title">{{this.$store.state.page}}</h1>

    <div v-if="user">
      <span class="position">{{user.position}}</span>
      <span class="name">{{user.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      user: this.$store.state.user
    };
  }
};
</script>

<style>
.header {
  width: 100%;
  background: #ee3239;
  margin: 0 auto;
}

.header img {
  display: block;
  margin: 0 auto;
  height: 150px;
}
</style>
