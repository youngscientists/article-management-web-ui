<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      shortTitle="AMS"
      title="Article Management System"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Articles',
            icon: 'ni ni-single-copy-04 text-primary',
            path: '/home/articles'
          }"
        />

        <sidebar-item
          :link="{name: 'User Profile', icon: 'ni ni-single-02 text-yellow', path: '/home/profile'}"
        />
        <sidebar-button
          icon="ni ni-settings-gear-65 text-black"
          name="Settings"
          @click="modals.settings = true"
        />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <modal :show.sync="modals.settings" modalClasses="modal-lg">
        <template slot="header">
          <h1 class="modal-title">
            <b v-theme="{color: 'accentFont'}">Settings</b>
          </h1>
        </template>

        <settings></settings>
        <template slot="footer">
          <base-button type="secondary" @click="modals.settings = false">Close</base-button>
          <base-button type="primary">Save changes</base-button>
        </template>
      </modal>
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
import Settings from "../views/Settings/Settings.vue";
import store from "@/store";
import router from "@/router";

export default {
  components: {
    HomeNavbar,
    ContentFooter,
    FadeTransition,
    Settings
  },
  data() {
    return {
      modals: { settings: false },
      sidebarBackground: "vue" //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  },
  computed: {
    GetAuth() {
      return store.state.auth;
    }
  },
  mounted() {
    if (!store.state.auth.token && process.env.VUE_APP_MODE !== "dev") {
      router.push({ name: "login" });
    }
  }
};
</script>
<style lang="sass">
</style>
