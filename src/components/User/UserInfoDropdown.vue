<template>
  <div class="root">
    <span class="position">{{user.position}}</span>
    <span class="name">{{user.name}}</span>
  </div>
</template>

<script>
export default {
  name: "UserInfoDropdown",
  props: {
    user: {}
  }
};
</script>

<style lang="scss" scoped>
.root {
  display: inline-block;
  left: 40%;
  height: 100%;
  border-left: 1px white;
  float: right;
  vertical-align: middle;
  padding: 30px;
  text-transform: uppercase;

  .position {
    background: white;
    color: black;
    padding: 8px;
    border-radius: 2px;
    font-size: 0.6em;
    font-weight: 700;
    vertical-align: middle;
  }
}
</style>
