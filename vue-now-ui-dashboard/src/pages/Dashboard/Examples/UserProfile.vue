<template>
  <div class="row">
    <div class="col-lg-8">
      <div>
        <user-edit-card :user="user" />
      </div>
      <div class="mt-5">
        <user-password-card :user="user" />
      </div>
    </div>
    <div class="col-lg-4">
      <user-card />
    </div>
  </div>
</template>

<script>
import UserEditCard from "@/pages/Dashboard/Examples/UserProfile/EditProfileCard.vue";
import UserPasswordCard from "@/pages/Dashboard/Examples/UserProfile/EditPasswordCard.vue";
import UserCard from "@/pages/Dashboard/Pages/UserProfile/UserCard.vue";

export default {
  name: "user-profile-example",

  components: {
    "user-card": UserCard,
    "user-edit-card": UserEditCard,
    "user-password-card": UserPasswordCard,
  },

  data() {
    return {
      user: {
        type: "profile",
        name: null,
        email: null,
        profile_image: null,
      },
    };
  },

  created() {
    this.getProfile();
  },

  methods: {
    async getProfile() {
      await this.$store.dispatch("profile/me");
      this.user = await this.$store.getters["profile/me"];
    },
  },
};
</script>