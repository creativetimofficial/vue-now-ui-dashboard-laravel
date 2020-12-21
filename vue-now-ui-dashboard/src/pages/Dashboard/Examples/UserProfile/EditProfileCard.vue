<template>
  <div class="card">
    <div class="card-header">
      <h3>Edit Profile</h3>
    </div>
    <div class="card-body">
      <form ref="profile_form" @submit.prevent="handleProfileUpdate">
        <label>Name</label>
        <fg-input
          prepend-icon="fas fa-user"
          placeholder="Your name"
          v-model="user.name"
          addon-left-icon="now-ui-icons users_circle-08"
          :error="apiValidationErrors.name"
        />

        <label>Email</label>
        <fg-input
          prepend-icon="fas fa-envelope"
          placeholder="Email"
          v-model="user.email"
          addon-left-icon="now-ui-icons ui-1_email-85"
          :error="apiValidationErrors.email"
        />

        <div class="my-4">
          <n-button
            type="button"
            class="btn btn-sm btn-primary"
            native-type="submit"
          >
            Submit
          </n-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import formMixin from "@/mixins/form-mixin";

export default {
  name: "UserEditCard",

  mixins: [formMixin],

  props: {
    user: Object,
  },

  methods: {
    async handleProfileUpdate() {
      if (["1", "2", "3"].includes(this.user.id)) {
        await this.$store.dispatch(
          "alerts/error",
          "You are not allowed to change data of default users."
        );
        return;
      }
      try {
        this.resetApiValidation();
        await this.$store.dispatch("profile/update", this.user);
        this.resetApiValidation();

        await this.$store.dispatch(
          "alerts/success",
          "Profile updated successfully."
        );
        await this.$store.getters["profile/me"];
      } catch (error) {
        await this.$store.dispatch(
          "alerts/error",
          "Oops, something went wrong!"
        );
        this.setApiValidation(error.response.data.errors);
      }
    },
  },
};
</script>
