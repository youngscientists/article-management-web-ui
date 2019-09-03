<template>
  <li class="nav-item">
    <div class="nav-link" style="cursor: pointer;" @click="handleClick">
      <template>
        <i :class="icon" v-theme="{color: 'icon'}"></i>
        <span class="nav-link-text" v-theme="{color: 'primaryFont'}">{{ name }}</span>
      </template>
    </div>
  </li>
</template>
<script>
export default {
  name: "sidebar-button",
  inject: {
    autoClose: {
      default: true
    }
  },
  props: {
    name: String,
    icon: String
  },
  data() {
    return {
      children: [],
      collapsed: true
    };
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
