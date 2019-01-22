<template>
  <div class="root">
    <div class="name">
      <a @click="viewUser">{{user.name}}</a>
      <ul>
        <li>{{user.position}}</li>
        <li>{{user.level}}</li>
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
  }

  ul {
    display: none;
    background: white;
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      width: 100%;
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
    color: black;
    border-radius: 2px;
    font-weight: 700;
    vertical-align: middle;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}
</style>
