<template>
  <div class="fixed-plugin" v-click-outside="closeDropDown">
    <div class="dropdown show-dropdown" :class="{ show: isOpen }">
      <a data-toggle="dropdown">
        <i class="fa fa-cog fa-2x" @click="toggleDropDown"> </i>
      </a>
      <ul class="dropdown-menu" :class="{ show: isOpen }">
        <li class="header-title">Sidebar Background</li>
        <li class="adjustments-line text-center">
          <span
            v-for="item in sidebarColors"
            :key="item.color"
            class="badge filter"
            :class="[`badge-${item.color}`, { active: item.active }]"
            :data-color="item.color"
            @click="changeSidebarBackground(item)"
          >
          </span>
        </li>

        <li class="header-title">Sidebar Mini</li>
        <li class="adjustments-line d-flex justify-content-center">
          <l-switch
            on-text="ON"
            off-text="OFF"
            :value="sidebarMini"
            @input="(val) => updateValue('sidebarMini', val)"
          ></l-switch>
        </li>

        <li class="button-container">
          <div class="">
            <a
              :href="buyUrl"
              target="_blank"
              class="btn btn-primary btn-block btn-fill btn-round"
            >
              <i class="fas fa-download"></i>Upgrade to PRO</a
            >

            <a
              :href="documentationLink"
              target="_blank"
              class="d-flex align-items-center justify-content-center btn btn-success btn-block btn-fill btn-round"
            >
              <i class="fas fa-file-alt"></i>Documentation</a
            >

            <a
              :href="downloadUrl"
              target="_blank"
              class="d-flex align-items-center justify-content-center btn btn-info btn-block btn-round"
            >
              <i class="fas fa-gift"></i>
              Download now
            </a>

            <a
              :href="gitLink"
              target="_blank"
              class="d-flex align-items-center justify-content-center btn btn-github btn-block btn-round"
            >
              <i class="fab fa-github"></i>
              Star us on Github
            </a>
          </div>
        </li>

        <li class="header-title d-flex justify-content-center">
          Thank you for sharing!
        </li>

        <li class="button-container">
          <social-sharing
            :url="shareUrl"
            inline-template
            title="Vue Now UI Dashboard - Premium Bootstrap Admin Template for Vue.js"
            hashtags="vuejs, dashboard, bootstrap"
            twitter-user="creativetim"
          >
            <div class="centered-buttons">
              <network
                network="facebook"
                class="btn btn-facebook btn-icon btn-round"
              >
                <i
                  class="fab fa-facebook-f"
                  style="margin-right: 0%; margin-top: 26%"
                ></i>
              </network>
              <network
                network="pinterest"
                class="btn btn-pinterest btn-icon btn-round"
              >
                <i
                  class="fab fa-fw fa-pinterest"
                  style="margin-right: 0%; margin-top: 26%"
                ></i>
              </network>
              <network
                network="twitter"
                class="btn btn-twitter btn-icon btn-round"
              >
                <i
                  class="fab fa-fw fa-twitter"
                  style="margin-right: 0%; margin-top: 26%"
                ></i>
              </network>
            </div>
          </social-sharing>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

import VueGitHubButtons from "vue-github-buttons";
import "vue-github-buttons/dist/vue-github-buttons.css";
import { Switch as LSwitch } from "src/components";

import SocialSharing from "vue-social-sharing";

const VueSelect = {
  install(Vue, options) {
    Vue.component("SocialSharing", SocialSharing);
  },
};
Vue.use(VueSelect);
Vue.use(VueGitHubButtons, { useCache: true });
export default {
  components: {
    LSwitch,
  },
  props: {
    color: {
      type: String,
      default: "black",
    },
    sidebarMini: Boolean,
    fixedNavbar: Boolean,
  },
  data() {
    return {
      documentationLink:
        "https://vue-now-ui-dashboard-laravel.creative-tim.com/documentation/#/getting-started",
      shareUrl:
        "https://www.creative-tim.com/product/vue-now-ui-dashboard-laravel",
      buyUrl:
        "https://www.creative-tim.com/product/vue-now-ui-dashboard-pro-laravel",
      downloadUrl:
        "https://www.creative-tim.com/product/vue-now-ui-dashboard-laravel",
      gitLink:
        "https://github.com/creativetimofficial/vue-now-ui-dashboard-laravel",
      isOpen: false,
      sidebarColors: [
        { color: "yellow", active: false },
        { color: "blue", active: false },
        { color: "green", active: false },
        { color: "orange", active: false },
        { color: "black", active: true },
        { color: "red", active: false },
      ],
    };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
    },
    closeDropDown() {
      this.isOpen = false;
    },
    toggleList(list, itemToActivate) {
      list.forEach((listItem) => {
        listItem.active = false;
      });
      itemToActivate.active = true;
    },
    updateValue(name, val) {
      this.$emit(`update:${name}`, val);
    },
    changeSidebarBackground(item) {
      this.$emit("update:color", item.color);
      this.toggleList(this.sidebarColors, item);
    },
  },
};
</script>
<style>
.centered-row {
  display: flex;
  height: 100%;
  align-items: center;
}

.button-container .btn {
  margin-right: 10px;
}

.centered-buttons {
  display: flex;
  justify-content: center;
}
</style>
