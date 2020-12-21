<template>
  <div>
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="text-center" style="margin-bottom: 5px; margin-top: -3px">
            <h3 class="text-white">
              Log in to Vue NOW UI Dashboard Live Preview
            </h3>
            <p class="text-lead text-white">
              Log in to see how you can go from frontend to fullstack in an
              instant with an API-based Laravel backend.
            </p>
          </div>

          <div class="text-white">
            <h5 class="text-white">
              <strong>You can log in with:</strong>
            </h5>
            <div>Username <b>admin@jsonapi.com</b> Password <b>secret</b></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 ml-auto mr-auto" style="margin-top: 35px">
      <form role="form" @submit.prevent="handleSubmit()">
        <card class="card-login card-plain">
          <div slot="header">
            <div class="logo-container">
              <img src="/img/now-logo.png" alt="" />
            </div>
          </div>

          <div>
            <fg-input
              v-model="email"
              name="email"
              class="no-border form-control-lg"
              placeholder="Email"
              addon-left-icon="now-ui-icons ui-1_email-85"
              :error="apiValidationErrors.email"
            >
            </fg-input>

            <fg-input
              v-model="password"
              type="password"
              name="password"
              class="no-border form-control-lg"
              placeholder="Password"
              addon-left-icon="now-ui-icons ui-1_lock-circle-open"
              :error="apiValidationErrors.password"
            >
            </fg-input>
          </div>

          <div slot="footer">
            <n-button native-type="submit" type="primary" round block>
              Get Started
            </n-button>
            <div class="pull-left">
              <h6>
                <router-link class="link footer-link" to="/register">
                  Create Account
                </router-link>
              </h6>
            </div>

            <div class="pull-right">
              <h6>
                <a href="/password/reset" class="link footer-link"
                  >Forgot password?</a
                >
              </h6>
            </div>
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
  data: () => ({
    email: "admin@jsonapi.com",
    password: "secret",
  }),
  computed: {
    isAuthenticated: function () {
      return this.$store.getters.isAuthenticated();
    },
  },
  methods: {
    async handleSubmit() {
      const user = {
        data: {
          type: "token",
          attributes: {
            email: this.email,
            password: this.password,
          },
        },
      };

      const requestOptions = {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      };

      try {
        await this.$store.dispatch("login", { user, requestOptions });
      } catch (error) {
        await this.$store.dispatch("alerts/error", "Invalid credentials!");
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
