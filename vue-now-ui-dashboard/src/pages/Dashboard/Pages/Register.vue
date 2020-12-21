<template>
  <div class="row">
    <div class="col-lg-5 ml-auto">
      <div class="info-area info-horizontal mt-5">
        <div class="icon icon-primary">
          <i class="now-ui-icons media-2_sound-wave"></i>
        </div>
        <div class="description">
          <h5 class="info-title">Marketing</h5>
          <p class="description">
            We've created the marketing campaign of the website. It was a very
            interesting collaboration.
          </p>
        </div>
      </div>

      <div class="info-area info-horizontal">
        <div class="icon icon-primary">
          <i class="now-ui-icons media-1_button-pause"></i>
        </div>
        <div class="description">
          <h5 class="info-title">Fully Coded in HTML5</h5>
          <p class="description">
            We've developed the website with HTML5 and CSS3. The client has
            access to the code using GitHub.
          </p>
        </div>
      </div>

      <div class="info-area info-horizontal">
        <div class="icon icon-info">
          <i class="now-ui-icons users_single-02"></i>
        </div>
        <div class="description">
          <h5 class="info-title">Built Audience</h5>
          <p class="description">
            There is also a Fully Customizable CMS Admin Dashboard for this
            product.
          </p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 mr-auto">
      <form role="form" @submit.prevent="handleSubmit">
        <card class="card-signup text-center" no-footer-line>
          <template slot="header">
            <h4 class="card-title">Register</h4>
            <div class="social">
              <button class="btn btn-icon btn-round btn-twitter">
                <i class="fab fa-twitter"></i>
              </button>
              <button class="btn btn-icon btn-round btn-dribbble">
                <i class="fab fa-dribbble"></i>
              </button>
              <button class="btn btn-icon btn-round btn-facebook">
                <i class="fab fa-facebook"> </i>
              </button>
              <h5 class="card-description">or be classical</h5>
            </div>
          </template>

          <fg-input
            v-model="name"
            name="name"
            placeholder="Name"
            addon-left-icon="now-ui-icons users_circle-08"
            :error="apiValidationErrors.name"
          >
          </fg-input>

          <fg-input
            v-model="email"
            name="email"
            placeholder="Email"
            addon-left-icon="now-ui-icons ui-1_email-85"
            :error="apiValidationErrors.email"
          >
          </fg-input>

          <fg-input
            v-model="password"
            name="password"
            placeholder="Password"
            addon-left-icon="now-ui-icons ui-1_lock-circle-open"
            type="password"
            :error="apiValidationErrors.password"
          >
          </fg-input>

          <fg-input
            v-model="password_confirmation"
            name="confirmPassword"
            placeholder="Confirm Password"
            addon-left-icon="now-ui-icons ui-1_lock-circle-open"
            type="password"
            :error="apiValidationErrors.password_confirmation"
          >
          </fg-input>

          <checkbox class="text-left" v-model="boolean">
            I agree to the <a href="#something">terms and conditions</a>.
          </checkbox>

          <n-button
            slot="footer"
            type="primary"
            native-type="submit"
            round
            size="lg"
          >
            Get Started
          </n-button>
        </card>
      </form>
    </div>
  </div>
</template>
<script>
import { Checkbox } from "src/components";
import formMixin from "@/mixins/form-mixin";
export default {
  components: {
    Checkbox,
  },
  mixins: [formMixin],
  data() {
    return {
      name: null,
      boolean: false,
      email: null,
      password: null,
      password_confirmation: null,
      modelValidations: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
          min: 8,
        },
        confirmPassword: {
          required: true,
          confirmed: "password",
        },
        boolean: {
          required: true,
        },
      },
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.boolean) {
        await this.$store.dispatch(
          "alerts/error",
          "You need to agree with our terms and conditions."
        );
        return;
      }

      const user = {
        data: {
          type: "token",
          attributes: {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation,
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
        await this.$store.dispatch("register", { user, requestOptions });

        await this.$store.dispatch(
          "alerts/success",
          "Successfully registered."
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
<style></style>
