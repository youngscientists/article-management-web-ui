<template>
  <div class="root">
    <div class="name">
      <img src="https://www.gravatar.com/avatar/1b0401043148b595951dbfe345f34810">
      <a @click="viewUser">{{user.name}}</a>
      <ul>
        <li>
          <router-link to="/articles">View Articles</router-link>
        </li>
        <li>
          <router-link to="/editors">View Editors</router-link>
        </li>
        <li>
          <router-link to="/settings">Settings</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfoDropdown",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    viewUser() {
      this.$store.dispatch("user/show");
    }
  }
};
</script>

<style lang="scss" scoped>
.root {
  position: absolute;
  display: inline-block;
  border-left: 1px white;
  vertical-align: middle;
  padding: 30px;
  text-transform: uppercase;
  right: 0;
  top: 20px;

  a,
  li {
    padding: 8px;
    text-decoration: none;
  }

  ul {
    display: none;
    background: white;
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      width: 100%;

      &:hover {
        background: #ed656a;
        a {
          color: white;
        }
      }
    }
  }

  &:hover {
    ul {
      display: block;
    }

    .name {
    }
  }

  .name {
    cursor: pointer;
    background: white;
    color: #453f3c;
    border-radius: 2px;
    font-weight: 700;
    vertical-align: middle;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    a {
      color: #453f3c;
    }

    img {
      height: 28px;
      margin-left: 8px;
      padding: 2px;
      vertical-align: middle;
    }
  }
}
</style>
