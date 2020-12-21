<template>
  <div>
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <div class="container">
        <div class="header-body text-center">
          <div class="row justify-content-center">
            <div class="text-center" style="margin-top: -3px">
              <h3 class="text-white">Reset password</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 ml-auto mr-auto">
      <form role="form" @submit.prevent="handleSubmit()">
        <card class="card-login card-plain">
          <div>
            <fg-input
              v-model="form.data.attributes.email"
              name="email"
              class="no-border form-control-lg"
              placeholder="Email"
              addon-left-icon="now-ui-icons ui-1_email-85"
              :error="apiValidationErrors.email"
            >
            </fg-input>
          </div>

          <div slot="footer">
            <n-button native-type="submit" type="primary" round block>
              Send Password Reset Link
            </n-button>
          </div>
        </card>
      </form>
    </div>
  </div>
</template>
<script>
import formMixin from "@/mixins/form-mixin";
export default {
  mixins: [formMixin],
  name: "login",
  data() {
    return {
      form: {
        data: {
          type: "password-forgot",
          attributes: {
            email: "",
            redirect_url: process.env.VUE_APP_BASE_URL + "/password/email",
          },
        },
      },
    };
  },

  methods: {
    async handleSubmit() {
      if (this.$isDemo == 1) {
        this.$store.dispatch(
          "alerts/error",
          "Password reset is disabled in the demo."
        );
        return;
      }
      try {
        await this.$store.dispatch("reset/forgotPassword", this.form.data);
        await this.$store.dispatch(
          "alerts/success",
          "An email with reset password link was sent."
        );
      } catch (error) {
        await this.$store.dispatch(
          "alerts/error",
          "We can't find a user with that e-mail address."
        );
        this.setApiValidation(error.response.data.errors);
      }
    },
  },
};
</script>
<style>
.navbar-nav .nav-item p {
  line-height: inherit;
  margin-left: 5px;
}
</style>
