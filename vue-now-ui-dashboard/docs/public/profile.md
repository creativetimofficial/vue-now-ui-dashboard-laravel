# Profile edit

You have the option to edit the current logged in user's profile information (name, email, profile picture) and password. To access this page, just click the "**Examples/Profile**" link in the left sidebar or add **/examples/user-profile** in the URL.

The `src\pages\Dashboard\Examples\UserProfile` is the folder with Vue components that handle the update of the user information and password.

## Edit profile component

```
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
```

## Edit password component

```
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
```
