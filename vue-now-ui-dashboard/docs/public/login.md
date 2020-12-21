# Login

The login functionality is fully implemented in our theme helping you to start your project in no time. To login into dashboard you just have to add **/login** in the URL and fill the login form with one of the credentials (user: **admin@jsonapi.com**, **creator@jsonapi.com**, **member@jsonapi.com** and password: **secret**).

The `src\pages\Dashboard\Pages\Login.vue` is the Vue component which handles the login functinality. You can easily adapt it to your needs.

It uses the auth store located in `src\store\modules\auth.js`.

## Login card

```
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
```
