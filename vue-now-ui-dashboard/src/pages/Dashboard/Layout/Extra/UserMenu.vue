<template>
  <div class="user user__menu">
    <div class="photo">
      <img :src="avatar" alt="avatar" />
    </div>
    <div class="info">
      <a
        data-toggle="collapse"
        :aria-expanded="!isClosed"
        @click.stop="toggleMenu"
        href="#"
      >
        <span>
          {{ title }}
          <b class="caret"></b>
        </span>
      </a>
      <div class="clearfix"></div>
      <div>
        <collapse-transition>
          <ul class="nav user-menu__nav" v-show="!isClosed">
            <slot>
              <li>
                <a href="/examples/user-profile">
                  <span class="sidebar-mini-icon">MP</span>
                  <span class="sidebar-normal">My Profile</span>
                </a>
              </li>

              <li>
                <a class="twhite" @click.prevent="logout()">
                  <span class="sidebar-mini-icon">L</span>
                  <span class="sidebar-normal">Logout</span>
                </a>
              </li>
            </slot>
          </ul>
        </collapse-transition>
      </div>
    </div>
  </div>
</template>
<script>
import { CollapseTransition } from "vue2-transitions";

export default {
  name: "user-menu",
  components: {
    CollapseTransition,
  },
  // props: {
  //   title: {
  //     type: String,
  //     default: 'James Amos'
  //   },
  //   image: {
  //     type: String,
  //     default: 'img/james.jpg'
  //   }
  // },

  async created() {
    this.$store.watch(
      () => this.$store.getters["profile/me"],
      (me) => {
        this.title = me.name;
        this.avatar = me.profile_image
          ? me.profile_image
          : "/img/placeholder.jpg";
      }
    );
    await this.$store.dispatch("profile/me");
  },
  data() {
    return {
      isClosed: true,
      title: "Profile",
      avatar: null,
    };
  },
  methods: {
    toggleMenu() {
      this.isClosed = !this.isClosed;
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
<style>
.user__menu ul.user-menu__nav {
  margin-top: 0;
  padding-top: 20px;
}
a.twhite:hover {
  color: white !important;
}
</style>
