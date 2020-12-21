<template>
  <div class="sidebar" :data-color="backgroundColor">
    <div class="logo">
      <a href="http://www.creative-tim.com" class="simple-text logo-mini">
        <div class="logo-image">
          <img :src="logo" />
        </div>
      </a>

      <a href="http://www.creative-tim.com" class="simple-text logo-normal">
        {{ title }}
      </a>
      <div class="navbar-minimize">
        <button
          id="minimizeSidebar"
          class="btn btn-simple btn-icon btn-neutral btn-round"
          @click="minimizeSidebar"
        >
          <i
            class="now-ui-icons text_align-center visible-on-sidebar-regular"
          ></i>
          <i
            class="now-ui-icons design_bullet-list-67 visible-on-sidebar-mini"
          ></i>
        </button>
      </div>
    </div>
    <div class="sidebar-wrapper" ref="sidebarScrollArea">
      <slot></slot>
      <ul class="nav">
        <slot name="links">
          <sidebar-item
            v-for="(link, index) in sidebarLinks"
            :key="link.name + index"
            :link="link"
          >
            <sidebar-item
              v-for="(subLink, index) in link.children"
              :key="subLink.name + index"
              :link="subLink"
            >
            </sidebar-item>
          </sidebar-item>
        </slot>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  props: {
    title: {
      type: String,
      default: "Vue NUD",
    },
    backgroundColor: {
      type: String,
      default: "black",
      validator: (value) => {
        let acceptedValues = [
          "",
          "blue",
          "azure",
          "green",
          "orange",
          "red",
          "purple",
          "black",
        ];
        return acceptedValues.indexOf(value) !== -1;
      },
    },
    logo: {
      type: String,
      default: "/img/icon-vue.png",
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
  },
  provide() {
    return {
      autoClose: this.autoClose,
    };
  },
  methods: {
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    },
  },
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  },
};
</script>
<style>
@media (min-width: 992px) {
  .navbar-search-form-mobile,
  .nav-mobile-menu {
    display: none;
  }
}
</style>
