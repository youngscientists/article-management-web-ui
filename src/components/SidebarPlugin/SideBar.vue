<template>
  <nav
    id="sidenav-main"
    v-theme="{background: 'primaryBg'}"
    class="navbar navbar-vertical fixed-left navbar-expand-md"
  >
    <div class="container-fluid">
      <!--Toggler-->
      <navbar-toggle-button @click.native="showSidebar">
        <i v-theme="{color: 'icon'}" class="ni ni-bullet-list-67" />
        <!-- <span class="navbar-toggler-icon" ></span> -->
      </navbar-toggle-button>
      <router-link class="navbar-brand" to="/home">
        <img v-theme="{isImage: true, update: true}" src="img/brand/logo.png" />
        <!-- <h1 v-theme="{color: 'primaryFont'}">{{shortTitle}}</h1> -->
      </router-link>

      <slot name="mobile-right">
        <!-- placeholder div centers the title -->
        <div />
      </slot>
      <slot />
      <div
        v-show="$sidebar.showSidebar"
        id="sidenav-collapse-main"
        v-theme="{background: 'primaryBg'}"
        class="navbar-collapse collapse show"
      >
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                <img src="img/brand/logo.png" />
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <navbar-toggle-button @click.native="closeSidebar" />
            </div>
          </div>
        </div>

        <ul class="navbar-nav">
          <slot name="links" />
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import NavbarToggleButton from "@/components/Base/NavbarToggleButton";
export default {
  name: "Sidebar",
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
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  },
  methods: {
    closeSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    showSidebar() {
      this.$sidebar.displaySidebar(true);
    }
  }
};
</script>

