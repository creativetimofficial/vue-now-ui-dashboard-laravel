<template>
  <div class="card">
    <div class="card-header">
      <h3>Change Password</h3>
    </div>
    <div class="card-body">
      <form ref="password_form" @submit.prevent="handleChangePassword">
        <fg-input
          v-model="password"
          type="password"
          name="new_password"
          autocomplete="on"
          class="mb-3"
          prepend-icon="fa fa-key"
          placeholder="New Password"
          addon-left-icon="now-ui-icons ui-1_lock-circle-open"
          :error="apiValidationErrors.password"
        />

        <fg-input
          v-model="password_confirmation"
          type="password"
          name="confirm_password"
          autocomplete="on"
          class="mb-3"
          prepend-icon="fa fa-key"
          placeholder="Confirm Password"
          addon-left-icon="now-ui-icons ui-1_lock-circle-open"
          :error="apiValidationErrors.password_confirmation"
        />
        <div class="my-4">
          <n-button
            type="button"
            class="btn btn-sm btn-primary"
            native-type="submit"
          >
            Change Password
          </n-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import formMixin from "@/mixins/form-mixin";

export default {
  name: "UserPasswordCard",

  mixins: [formMixin],

  props: {
    user: Object,
  },

  data() {
    return {
      password: null,
      password_confirmation: null,
    };
  },

  methods: {
    async handleChangePassword() {
      if (this.$isDemo == 1 && ["1", "2", "3"].includes(this.user.id)) {
        await this.$store.dispatch(
          "alerts/error",
          "You are not allowed to change data of default users."
        );
        return;
      }
      this.user.password = this.password;
      this.user.password_confirmation = this.password_confirmation;

      try {
        this.resetApiValidation();
        await this.$store.dispatch("users/update", this.user);
        this.$refs["password_form"].reset();

        await this.$store.dispatch(
          "alerts/success",
          "Password changed successfully."
        );
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
