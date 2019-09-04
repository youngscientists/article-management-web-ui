<template>
  <nav
    class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light"
    id="sidenav-main"
    v-theme="{background: 'primaryBg'}"
  >
    <div class="container-fluid">
      <!--Toggler-->
      <navbar-toggle-button @click.native="showSidebar">
        <span class="navbar-toggler-icon"></span>
      </navbar-toggle-button>
      <router-link class="navbar-brand" to="/home">
        <h1 v-theme="{color: 'accentFont'}">{{shortTitle}}</h1>
      </router-link>

      <slot name="mobile-right">
        <!-- placeholder div centers the title -->
        <div></div>
      </slot>
      <slot></slot>
      <div
        v-show="$sidebar.showSidebar"
        class="navbar-collapse collapse show"
        id="sidenav-collapse-main"
        v-theme="{background: 'primaryBg'}"
      >
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                <img src="img/brand/logo-dark.png" />
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <navbar-toggle-button @click.native="closeSidebar"></navbar-toggle-button>
            </div>
          </div>
        </div>

        <ul class="navbar-nav">
          <slot name="links"></slot>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import NavbarToggleButton from "@/components/Base/NavbarToggleButton";
export default {
  name: "sidebar",
  components: {
    NavbarToggleButton
  },
  props: {
    autoClose: {
      type: Boolean,
      default: true,
      description:
        "Whether sidebar should autoclose on mobile when clicking an item"
    },
    title: String,
    shortTitle: String
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  methods: {
    closeSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    showSidebar() {
      this.$sidebar.displaySidebar(true);
    }
  },
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  }
};
</script>