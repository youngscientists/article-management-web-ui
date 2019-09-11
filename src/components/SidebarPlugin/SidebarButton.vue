<template>
  <li class="nav-item">
    <div
      class="nav-link"
      style="cursor: pointer;"
      @click="handleClick"
    >
      <template>
        <i
          v-theme="{color: 'icon'}"
          :class="icon"
        />
        <span
          v-theme="{color: 'primaryFont'}"
          class="nav-link-text"
        >{{ name }}</span>
      </template>
    </div>
  </li>
</template>
<script>
export default {
  name: "SidebarButton",
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
