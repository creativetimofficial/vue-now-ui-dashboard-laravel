<template>
  <navbar :show-navbar="showNavbar">
    <div class="navbar-wrapper">
      <div class="navbar-toggle" :class="{ toggled: $sidebar.showSidebar }">
        <navbar-toggle-button @click.native="toggleSidebar">
        </navbar-toggle-button>
      </div>
      <a class="navbar-brand" href="/examples/user-profile">
        {{ $route.name }}
      </a>
    </div>
    <button
      @click="toggleNavbar"
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navigation"
      aria-controls="navigation-index"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-bar navbar-kebab"></span>
      <span class="navbar-toggler-bar navbar-kebab"></span>
      <span class="navbar-toggler-bar navbar-kebab"></span>
    </button>

    <template slot="navbar-menu"
      ><a
        href="https://vue-now-ui-dashboard-laravel.creative-tim.com/documentation/#/getting-started"
        target="_blank"
        class="btn mr-2 mt-0"
        style="background-color: #18ce0f"
      >
        <i class="fas fa-file-alt mr-2"></i>Documentation</a
      >
      <a
        href="https://www.creative-tim.com/product/vue-now-ui-dashboard-laravel"
        target="_blank"
        class="btn mr-3 mt-0"
        style="background-color: #4bb5ff"
      >
        <i class="fas fa-gift mr-2"></i>Download now</a
      >
      <form>
        <div class="input-group no-border">
          <fg-input
            placeholder="Search..."
            addon-right-icon="now-ui-icons ui-1_zoom-bold"
          >
          </fg-input>
        </div>
      </form>

      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/examples/user-profile">
            <i class="now-ui-icons media-2_sound-wave"></i>
            <p>
              <span class="d-lg-none d-md-block">Stats</span>
            </p>
          </a>
        </li>
        <drop-down
          tag="li"
          position="right"
          class="nav-item"
          icon="now-ui-icons location_world"
        >
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </drop-down>

        <li class="nav-item">
          <a class="nav-link" href="/examples/user-profile">
            <i class="now-ui-icons users_single-02"></i>
            <p>
              <span class="d-lg-none d-md-block">Account</span>
            </p>
          </a>
        </li>
      </ul>
    </template>
  </navbar>
</template>
<script>
import { RouteBreadCrumb, Navbar, NavbarToggleButton } from "src/components";
import { CollapseTransition } from "vue2-transitions";

export default {
  components: {
    // RouteBreadCrumb,
    Navbar,
    NavbarToggleButton,
    //   CollapseTransition,
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
  },
  data() {
    return {
      activeNotifications: false,
      showNavbar: false,
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
  },
};
</script>
<style>
</style>
