<template>
  <base-nav
    id="navbar-main"
    class="navbar-top navbar-dark"
    :show-toggle-button="false"
    expand
  >
    <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
      <div class="form-group mb-0">
        <base-input
          placeholder="Search"
          class="input-group-alternative"
          addon-right-icon="fas fa-search"
        />
      </div>
    </form>
    <ul class="navbar-nav align-items-center d-none d-md-flex">
      <li class="nav-item dropdown">
        <base-dropdown class="nav-link pr-0">
          <div
            slot="title"
            class="media align-items-center"
          >
            <span class="avatar avatar-sm rounded-circle">
              <img
                alt="Image placeholder"
                src="img/theme/team-4-800x800.jpg"
              >
            </span>
            <div class="media-body ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm font-weight-bold">{{ user }}</span>
            </div>
          </div>

          <template>
            <div class="dropdown-header noti-title">
              <h6 class="text-overflow m-0">
                Welcome!
              </h6>
            </div>
            <router-link
              to="/profile"
              class="dropdown-item"
            >
              <i class="ni ni-single-02" />
              <span>My profile</span>
            </router-link>
            <router-link
              to="/profile"
              class="dropdown-item"
            >
              <i class="ni ni-settings-gear-65" />
              <span>Settings</span>
            </router-link>
            <router-link
              to="/profile"
              class="dropdown-item"
            >
              <i class="ni ni-calendar-grid-58" />
              <span>Activity</span>
            </router-link>
            <router-link
              to="/profile"
              class="dropdown-item"
            >
              <i class="ni ni-support-16" />
              <span>Support</span>
            </router-link>
            <div class="dropdown-divider" />
            <router-link
              to="/profile"
              class="dropdown-item"
            >
              <i class="ni ni-user-run" />
              <span>Logout</span>
            </router-link>
          </template>
        </base-dropdown>
      </li>
    </ul>
  </base-nav>
</template>
<script>
export default {
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchQuery: ""
    };
  },
  computed: {
    user() {
      // NOTE $store seems to be Undefined
      /* return this.$store.getters["account/user"]; */
    }
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
