<template>
  <div class="header">
    <router-link to="/articles">
      <a>
        <img src="//assets.ysjournal.com/img/head-transparent.png">
      </a>
    </router-link>

    <h1 id="title">{{this.$store.state.title}}</h1>

    <user-info-dropdown v-if="user.name"></user-info-dropdown>
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

<style lang="scss" scoped>
.header {
  width: 100%;
  background: #ee3239;
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  a,
  h1 {
    vertical-align: middle;
    display: inline-block;
  }

  h1 {
    text-transform: uppercase;
    color: white;
    font-size: 2.6rem;
    padding: 16px;
  }

  img {
    margin: 0 auto;
    height: 140px;
  }
}
</style>
