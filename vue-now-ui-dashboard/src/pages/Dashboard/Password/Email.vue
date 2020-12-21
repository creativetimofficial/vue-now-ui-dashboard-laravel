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
              v-model="form.data.attributes.password"
              type="password"
              name="password"
              class="no-border form-control-lg"
              placeholder="Password"
              addon-left-icon="now-ui-icons ui-1_lock-circle-open"
              :error="apiValidationErrors.password"
            >
            </fg-input>

            <fg-input
              v-model="form.data.attributes.password_confirmation"
              type="password"
              name="Password confirmation"
              class="no-border form-control-lg"
              placeholder="Confirm Password"
              addon-left-icon="now-ui-icons ui-1_lock-circle-open"
              :error="apiValidationErrors.password_confirmation"
            >
            </fg-input>
          </div>

          <div slot="footer">
            <n-button native-type="submit" type="primary" round block>
              Reset Password
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
          type: "password-reset",
          attributes: {
            password: "",
            password_confirmation: "",
            token: "",
            email: "",
          },
        },
      },
    };
  },

  mounted() {
    this.form.data.attributes.email = this.$route.query.email;
    this.form.data.attributes.token = this.$route.query.token;
  },

  beforeDestroy() {
    this.$router.replace({ query: null });
  },

  methods: {
    async handleSubmit() {
      try {
        await this.$store.dispatch("reset/createNewPassword", this.form.data);
      } catch (error) {
        await this.$store.dispatch(
          "alerts/error",
          "The given data was invalid."
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
