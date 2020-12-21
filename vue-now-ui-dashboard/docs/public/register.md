# Register

The register functionality is fully implemented in our theme helping you to start your project in no time. To register a new user you just have to add **/register** in the URL or click on register link from login page and fill the register form with user details.

The `src\pages\Dashboard\Pages\Register.vue` is the Vue component which handles the login functinality. You can easily extend it to your needs.

It uses the auth store located in `src\store\modules\auth.js`.

## Register card

```
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
```
