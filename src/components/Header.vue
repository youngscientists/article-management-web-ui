<template>
  <div class="header">
    <a href="/">
      <img src="//assets.ysjournal.com/img/head-transparent.png">
    </a>
    <h1 id="title">{{this.$store.state.title}}</h1>

    <user-info-dropdown v-if="user.name" :user="user"></user-info-dropdown>
  </div>
</template>

<script>
import UserInfoDropdown from "./User/UserInfoDropdown";

export default {
  name: "Header",
  components: {
    UserInfoDropdown
  },
  data() {
    return {
      user: this.$store.state.user
    };
  }
};
</script>

<style lang="scss">
.header {
  width: 100%;
  background: #ee3239;
  margin: 0 auto;
  text-align: center;

  a,
  h1 {
    vertical-align: middle;
    display: inline-block;
  }

  h1 {
    text-transform: uppercase;
    color: white;
    font-size: 2.6rem;
  }

  img {
    margin: 0 auto;
    height: 140px;
  }
}
</style>
