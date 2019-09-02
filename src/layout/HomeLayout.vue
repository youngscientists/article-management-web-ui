<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="AMS"
      title="Article Management System"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Articles',
            icon: 'ni ni-single-copy-04 text-primary',
            path: '/articles'
          }"
        />

        <!-- <sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet text-blue', path: '/icons'}" /> -->
        <!-- <sidebar-item :link="{name: 'Maps', icon: 'ni ni-pin-3 text-orange', path: '/maps'}" /> -->
        <sidebar-item
          :link="{name: 'User Profile', icon: 'ni ni-single-02 text-yellow', path: '/profile'}"
        />
        <!--  <sidebar-item
          :link="{name: 'Tables', icon: 'ni ni-bullet-list-67 text-red', path: '/tables'}"
        />-->
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <home-navbar></home-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import HomeNavbar from "./HomeNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    HomeNavbar,
    ContentFooter,
    FadeTransition
  },
  data() {
    return {
      sidebarBackground: "vue" //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
<style lang="sass">
</style>
