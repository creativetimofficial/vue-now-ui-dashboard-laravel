<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>
    <side-bar :background-color="sidebarBackground">
      <template slot-scope="props" slot="links">
        <user-menu></user-menu>
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'now-ui-icons design_app',
            path: '/dashboard',
          }"
        >
        </sidebar-item>
        <sidebar-item
          opened
          :link="{
            name: 'Examples (API)',
            icon: 'fab fa-vuejs',
          }"
        >
          <sidebar-item
            :link="{ name: 'User Profile', path: '/examples/user-profile' }"
          ></sidebar-item>

          <sidebar-item
            :link="{
              name: 'User Management',
              path: '/examples/user-management/list-users',
            }"
          ></sidebar-item>
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Icons',
            icon: 'now-ui-icons education_atom',
            path: '/components/icons',
          }"
        ></sidebar-item>

        <sidebar-item
          :link="{
            name: 'Maps',
            icon: 'now-ui-icons location_pin',
            path: '/maps/google',
          }"
        />

        <sidebar-item
          :link="{
            name: 'Notifications',
            icon: 'now-ui-icons ui-1_bell-53',
            path: '/components/notifications',
          }"
        ></sidebar-item>

        <sidebar-item
          :link="{
            name: 'Table List',
            icon: 'now-ui-icons design_bullet-list-67',
            path: '/table-list/regular',
          }"
        ></sidebar-item>

        <sidebar-item
          :link="{
            name: 'Typography',
            icon: 'now-ui-icons text_caps-small',
            path: '/components/typography',
          }"
        ></sidebar-item>

        <a
          href="https://www.creative-tim.com/product/vue-white-dashboard-pro-laravel"
          target="_blank"
          class="btn btn-primary"
          rel="noopener"
          style="margin-left: 15px"
        >
          <span class="btn-inner--icon"
            ><i class="fas fa-download" style="margin-left: 14px"></i
          ></span>

          <div
            class="nav-link-inner--text"
            style="
              margin-left: -4px;
              margin-right: 90px;
              margin-top: 8px;
              white-space: nowrap;
            "
          >
            Upgrade to PRO
          </div></a
        >
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <sidebar-share
        :color.sync="sidebarBackground"
        :fixed-navbar.sync="fixedNavbar"
        :sidebarMini.sync="sidebarMini"
        style="cursor: pointer"
      >
      </sidebar-share>
      <router-view name="header"></router-view>

      <div
        :class="{ content: !$route.meta.hideContent }"
        @click="toggleSidebar"
      >
        <zoom-center-transition :duration="200" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </zoom-center-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import UserMenu from "./Extra/UserMenu.vue";
import { SlideYDownTransition, ZoomCenterTransition } from "vue2-transitions";
import Vuex from "vuex";
import SidebarShare from "./Extra/SidebarSharePlugin";

export default {
  components: {
    TopNavbar,
    ContentFooter,
    UserMenu,
    ZoomCenterTransition,
    SidebarShare,
  },
  data() {
    return {
      sidebarBackground: "black",
      fixedNavbar: false,
      sidebarMini: false,
    };
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
        let text = this.$sidebar.isMinimized ? "activated" : "deactivated";
        this.$notify({ type: "info", message: `Sidebar mini ${text}...` });
      }
    },
  },
  mounted() {
    let docClasses = document.body.classList;
    let isWindows = navigator.platform.startsWith("Win");
    if (isWindows) {
      // if we are on windows OS we activate the perfectScrollbar function
      initScrollbar("sidebar");
      initScrollbar("sidebar-wrapper");

      docClasses.add("perfect-scrollbar-on");
    } else {
      docClasses.add("perfect-scrollbar-off");
    }
    this.initScrollbar(), this.$store.dispatch("profile/me");
  },
  computed: {
    ...Vuex.mapState({
      me: (state) => state.profile.me,
    }),
  },
  watch: {
    sidebarMini() {
      this.minimizeSidebar();
    },
  },
};
</script>
<style lang="scss">
$scaleSize: 0.95;
@keyframes zoomIn95 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  to {
    opacity: 1;
  }
}
.main-panel .zoomIn {
  animation-name: zoomIn95;
}
@keyframes zoomOut95 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}
.main-panel .zoomOut {
  animation-name: zoomOut95;
}
</style>
