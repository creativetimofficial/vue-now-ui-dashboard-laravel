# [Vue Now UI Dashboard Laravel](https://vue-now-ui-dashboard-laravel.creative-tim.com/?ref=vnudl-readme) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/home?status=Vue%Now%Ui%20Dashboard%20Pro%20Laravel%E2%9D%A4%EF%B8%8F%0Ahttps%3A//vue-now-ui-dashboard-laravel.creative-tim.com/%20%23%vue%20%23%now%ui%20%23design%20%23dashboard%20%23laravel%20%23pro%20via%20%40CreativeTim)

![version](https://img.shields.io/badge/version-1.0.0-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/vue-now-ui-dashboard-laravel.svg?maxAge=2592000)](https://github.com/creativetimofficial/vue-now-ui-dashboard-laravel/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/vue-now-ui-dashboard-laravel/vue-now-ui-dashboard-laravel.svg?maxAge=2592000)](https://github.com/creativetimofficial/vue-now-ui-dashboard-laravel/issues?q=is%3Aissue+is%3Aclosed)

_Frontend version_: Now UI Dashboard v1.5.0. More info at https://www.creative-tim.com/product/now-ui-dashboard

![Product Image](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-now-ui-dashboard-laravel-pro/intro.gif)

What if you could go from frontend to fullstack in an instant when building your app? We partnered with [UPDIVISION](https://updivision.com) to bring you Vue Now UI Dashboard Laravel, the ultimate fullstack resource. Vue Now UI Dashboard Laravel comes not only with a huge number of UI components and a Vue Now UI frontend, but also with an API-powered Laravel backend.

# Download

For the free version of the project you can either

- download the .zip file from the Creative Tim site and extract it or
- make a clone from the Github repository

You will get two project folders: one for the Laravel API project and one for the Vue frontend.

# Laravel API Setup

## Introduction

JSON:API is a specification for how a client should request that resources be fetched or modified, and how a server should respond to those requests. It is designed to minimize both the number of requests and the amount of data transmitted between clients and servers. This efficiency is achieved without compromising readability, flexibility, or discoverability.

[Click here to go to the JSON:API docs](https://explore.postman.com/api/6357/laravel-jsonapi)

## Prerequisites

### JSON:API backend
The Laravel JSON:API backend project requires a proper multi-threaded web server such as Apache/Nginx environment with PHP, Composer and MySQL.

**Do not use `php artisan serve` as it will result in stalled requests due to the single-threaded nature of the built-in PHP web server.** 

We strongly recommend using [Laradock](https://laradock.io/) for Linux and Mac or [Laragon](https://laragon.org/download/) for Windows if possible.

Other options for your local environment:
- Windows: [How to install WAMP on Windows](https://updivision.com/blog/post/beginner-s-guide-to-setting-up-your-local-development-environment-on-windows)
- Linux: [How to install LAMP on Linux](https://howtoubuntu.org/how-to-install-lamp-on-ubuntu)
- Mac: [How to install MAMP on MAC](https://wpshout.com/quick-guides/how-to-install-mamp-on-your-mac/)

You will also need to install Composer 2: [https://getcomposer.org/doc/00-intro.md](https://getcomposer.org/doc/00-intro.md)

### Vue Now UI frontend
The Vue Now UI frontend project requires a working local environment with NodeJS version 8.9 or above (8.11.0+ recommended), npm, VueCLI.

Install Node: https://nodejs.org/ (version 8.11.0+ recommended)

Install NPM: https://www.npmjs.com/get-npm

Install VueCLI: https://cli.vuejs.org/guide/installation.html

## Laravel API Project Installation

1. Navigate in your Laravel API project folder: `cd your-laravel-json-api-project`
2. Install project dependencies: `composer install`
3. Create a new .env file: `cp .env.example .env`
4. Add your own database credentials in the .env file in DB_DATABASE, DB_USERNAME, DB_PASSWORD
5. Create users table: `php artisan migrate --seed`
6. Generate application key: `php artisan key:generate`
7. Install Laravel Passport: `php artisan passport:install`
8. Add your own mailtrap.io credentials in MAIL_USERNAME and MAIL_PASSWORD in the .env file

## Vue Now UI Dashboard Project Installation

1. Navigate to your Vue Now UI Dashboard project folder: `cd your-vue-now-ui-dashbord-project`
2. Install project dependencies: `npm install`
3. Create a new .env file: `cp .env.example .env`
4. `VUE_APP_BASE_URL` should contain the URL of your Vue Now Ui Dashboard Project (eg. http://localhost:8080/)
5. `VUE_APP_API_BASE_URL` should contain the URL of your Laravel JSON:API Project. (eg. http://localhost:3000/api/v1)
6. Run `npm run dev` to start the application in a local development environment or `npm run build` to build release distributables.

## Usage

Register a user or login using admin@jsonapi.com and secret and start testing the theme.

Besides the dashboard and the auth pages this theme also has an edit profile page. All the necessary files are installed out of the box and all the needed routes are added to `src\routes\routes.js`. Keep in mind that all the features can be viewed once you log in using the credentials provided above or by registering your own user.

### Dashboard

You can access the dashboard either by using the "**Dashboards/Dashboard**" link in the left sidebar or by adding **/dashboard** in the URL.

### Login

The login functionality is fully implemented in our theme helping you to start your project in no time. To login into dashboard you just have to add **/login** in the URL and fill the login form with one of the credentials (user: **admin@jsonapi.com** and password: **secret**).

The `src\pages\Dashboard\Pages\Login.vue` is the Vue component which handles the login functinality. You can easily adapt it to your needs.

It uses the auth store located in `src\store\modules\auth.js`.

### Login Card

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

### Register

The register functionality is fully implemented in our theme helping you to start your project in no time. To register a new user you just have to add **/register** in the URL or click on register link from login page and fill the register form with user details.

The `src\pages\Dashboard\Pages\Register.vue` is the Vue component which handles the login functinality. You can easily extend it to your needs.

It uses the auth store located in `src\store\modules\auth.js`.

#### Register card

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

### Profile edit

You have the option to edit the current logged in user's profile information (name, email, profile picture) and password. To access this page, just click the "**Examples/Profile**" link in the left sidebar or add **/examples/user-profile** in the URL.

The `src\pages\Dashboard\Examples\UserProfile` is the folder with Vue components that handle the update of the user information and password.

#### Edit profile component

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

#### Edit password component

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

## Table of Contents

- [Versions](#versions)
- [Demo](#demo)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Resources](#resources)
- [Reporting Issues](#reporting-issues)
- [Licensing](#licensing)
- [Useful Links](#useful-links)

## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/html-logo.jpg" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/laravel_logo.png" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/vue.jpg" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/json-api.png" height="75" />](#)

| HTML                                                                                                                                                                                                                   | Laravel                                                                                                                                                                                                             | Vue & Laravel                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Now UI Dashboard HTML](https://s3.amazonaws.com/creativetim_bucket/products/75/original/opt_nud_thumbnail.jpg)](https://www.creative-tim.com/product/now-ui-dashboard?ref=vnudl-readme) | [![Now UI Dashboard Laravel](https://s3.amazonaws.com/creativetim_bucket/products/211/original/opt_nud_laravel_thumbnail.jpg)](https://www.creative-tim.com/product/now-ui-dashboard-laravel?ref=vnudl-readme)  | [![Vue Now UI Dashboard Laravel](https://s3.amazonaws.com/creativetim_bucket/products/406/original/opt_nud_vuelaravel_thumbnail.jpg)](https://www.creative-tim.com/product/vue-now-ui-dashboard-laravel?ref=vnudl-readme) |


## Demo

| Register                                                                                                                                                                                                                   | Login                                                                                                                                                                                                             | Dashboard                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Register](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-now-ui-dashboard-laravel-pro/register.png)](https://vue-now-ui-dashboard-laravel.creative-tim.com/register?ref=vnudl-readme) | [![Login](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-now-ui-dashboard-laravel-pro/login.png)](https://vue-now-ui-dashboard-laravel.creative-tim.com/login?ref=vnudl-readme) | [![Dashboard](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-now-ui-dashboard-laravel-pro/dashboard.png)](https://vue-now-ui-dashboard-laravel.creative-tim.com/?ref=vnudl-readme) |

| Profile Page                                                                                                                                                                                                                               | Users Page                                                                                                                                                                                                                                           | Tables Page                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Profile Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-now-ui-dashboard-laravel-pro/profile.png)](https://vue-now-ui-dashboard-laravel.creative-tim.com/examples/user-profile?ref=vnudl-readme) | [![Users Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-now-ui-dashboard-laravel-pro/users.png)](https://vue-now-ui-dashboard-laravel.creative-tim.com/examples/user-management/list-users?ref=vnudl-readme) | [![Tables Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-now-ui-dashboard-laravel-pro/table.png)](https://vue-now-ui-dashboard-laravel.creative-tim.com/table-list/regular?ref=vnudl-readme) |

[View More](https://vue-now-ui-dashboard-laravel.creative-tim.com/?ref=vnudl-readme)

## Documentation

The documentation for the Vue Now UI Dashboard Laravel is hosted at our [website](https://vue-now-ui-dashboard-laravel.creative-tim.com/documentation/#/getting-started?ref=vnudl-github-readme).

## File Structure


```
├───vue-now-ui-dashboard-free
│   App.vue
│   dashboard-plugin.js
│   globalComponents.js
│   globalDirectives.js
│   main.js
│   polyfills.js
│   registerServiceWorker.js
│
├───assets
│   ├───css
│   │       demo.css
│   │
│   ├───fonts
│   │       nucleo-outline.eot
│   │       nucleo-outline.ttf
│   │       nucleo-outline.woff
│   │       nucleo-outline.woff2
│   │
│   └───sass
│       │   now-ui-dashboard.scss
│       │
│       └───now-ui-dashboard
│           │   _alerts.scss
│           │   _badges.scss
│           │   _buttons.scss
│           │   _cards.scss
│           │   _carousel.scss
│           │   _checkboxes-radio.scss
│           │   _dropdown.scss
│           │   _example-pages.scss
│           │   _fixed-plugin.scss
│           │   _footers.scss
│           │   _images.scss
│           │   _info-areas.scss
│           │   _inputs.scss
│           │   _misc.scss
│           │   _mixins.scss
│           │   _modals.scss
│           │   _navbar.scss
│           │   _nucleo-outline.scss
│           │   _page-header.scss
│           │   _pagination.scss
│           │   _pills.scss
│           │   _popups.scss
│           │   _progress.scss
│           │   _responsive.scss
│           │   _sections.scss
│           │   _sidebar-and-main-panel.scss
│           │   _social-buttons.scss
│           │   _tables.scss
│           │   _tabs.scss
│           │   _typography.scss
│           │   _variables.scss
│           │
│           ├───cards
│           │       _card-background.scss
│           │       _card-chart.scss
│           │       _card-collapse.scss
│           │       _card-contributions.scss
│           │       _card-info-area.scss
│           │       _card-map.scss
│           │       _card-profile.scss
│           │       _card-signup.scss
│           │       _card-stats-mini.scss
│           │       _card-stats.scss
│           │       _card-subcategories.scss
│           │       _card-testimonials.scss
│           │
│           ├───element-ui-plugins
│           │       _input.scss
│           │       _select.scss
│           │       _tables.scss
│           │       _tooltip.scss
│           │
│           ├───mixins
│           │       _badges.scss
│           │       _buttons.scss
│           │       _cards.scss
│           │       _dropdown.scss
│           │       _inputs.scss
│           │       _modals.scss
│           │       _page-header.scss
│           │       _popovers.scss
│           │       _tags.scss
│           │       _transparency.scss
│           │       _vendor-prefixes.scss
│           │
│           └───plugins
│                   _plugin-bootstrap-switch.scss
│                   _plugin-nouislider.scss
│                   _plugin-perfect-scrollbar.scss
│
├───axios
│       index.js
│
├───components
│   │   AnimatedNumber.vue
│   │   Badge.vue
│   │   Button.vue
│   │   Dropdown.vue
│   │   index.js
│   │   isDemo.js
│   │   LoadingPanel.vue
│   │   Modal.vue
│   │   Pagination.vue
│   │   Progress.vue
│   │   Slider.vue
│   │   Switch.vue
│   │   Table.vue
│   │   ValidationError.vue
│   │
│   ├───Breadcrumb
│   │       Breadcrumb.vue
│   │       BreadcrumbItem.vue
│   │       RouteBreadcrumb.vue
│   │
│   ├───Cards
│   │       Card.vue
│   │       StatsCard.vue
│   │
│   ├───Charts
│   │       BarChart.js
│   │       LineChart.js
│   │       utils.js
│   │
│   ├───Collapse
│   │       Collapse.vue
│   │       CollapseItem.vue
│   │
│   ├───Inputs
│   │       Checkbox.vue
│   │       formGroupInput.vue
│   │       IconCheckbox.vue
│   │       Radio.vue
│   │
│   ├───Navbar
│   │       Navbar.vue
│   │       NavbarToggleButton.vue
│   │
│   ├───NotificationPlugin
│   │       index.js
│   │       Notification.vue
│   │       Notifications.vue
│   │
│   ├───SidebarPlugin
│   │       index.js
│   │       SideBar.vue
│   │       SidebarItem.vue
│   │
│   ├───Tabs
│   │       Tab.vue
│   │       Tabs.vue
│   │
│   └───WorldMap
│           AsyncWorldMap.vue
│           WorldMap.vue
│           world_map.js
│
├───directives
│       click-ouside.js
│
├───middleware
│       auth.js
│       guest.js
│
├───mixins
│       form-mixin.js
│
├───pages
│   ├───Dashboard
│   │   │   DefaultHeader.vue
│   │   │
│   │   ├───Components
│   │   │       Icons.vue
│   │   │       Notifications.vue
│   │   │       Typography.vue
│   │   │
│   │   ├───Dashboard
│   │   │   │   Dashboard.vue
│   │   │   │   DashboardHeader.vue
│   │   │   │   HeaderChart.js
│   │   │   │
│   │   │   └───Stats
│   │   │           Task.vue
│   │   │           TaskList.vue
│   │   │
│   │   ├───Examples
│   │   │   │   UserProfile.vue
│   │   │   │
│   │   │   ├───UserManagement
│   │   │   │       ListUserPage.vue
│   │   │   │
│   │   │   └───UserProfile
│   │   │           EditPasswordCard.vue
│   │   │           EditProfileCard.vue
│   │   │
│   │   ├───Layout
│   │   │   │   Content.vue
│   │   │   │   ContentFooter.vue
│   │   │   │   DashboardLayout.vue
│   │   │   │   LoadingMainPanel.vue
│   │   │   │   TopNavbar.vue
│   │   │   │
│   │   │   └───Extra
│   │   │           MobileMenu.vue
│   │   │           SidebarSharePlugin.vue
│   │   │           UserMenu.vue
│   │   │
│   │   ├───Maps
│   │   │       API_KEY.js
│   │   │       FullScreenMap.vue
│   │   │       GoogleMaps.vue
│   │   │       WorldMap.vue
│   │   │       world_map.js
│   │   │
│   │   ├───Pages
│   │   │   │   AuthLayout.vue
│   │   │   │   Login.vue
│   │   │   │   Register.vue
│   │   │   │   UserProfile.vue
│   │   │   │
│   │   │   └───UserProfile
│   │   │           EditProfileForm.vue
│   │   │           UserCard.vue
│   │   │
│   │   ├───Password
│   │   │       Email.vue
│   │   │       Reset.vue
│   │   │
│   │   └───Tables
│   │           RegularTables.vue
│   │           users.js
│   │
│   └───GeneralViews
│           NotFoundPage.vue
│
├───routes
│       index.js
│       routes.js
│
├───store
│   │   index.js
│   │
│   ├───modules
│   │       alerts-module.js
│   │       auth.js
│   │       profile-module.js
│   │       reset.js
│   │
│   └───services
│           profile-service.js
│
└───util
        throttle.js
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">

## Resources

- Demo: <https://vue-now-ui-dashboard-laravel.creative-tim.com/?ref=vnudl-readme>
- Download Page: <https://www.creative-tim.com/product/vue-now-ui-dashboard-laravel?ref=vnudl-readme>
- Documentation: <https://vue-now-ui-dashboard-laravel.creative-tim.com/documentation/#/getting-started?ref=vnudl-readme>
- License Agreement: <https://www.creative-tim.com/license>
- Support: <https://www.creative-tim.com/contact-us>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/vue-now-ui-dashboard-laravel/issues)
- **Dashboards:**

| HTML                                                                                                                                                                                                                   | Laravel                                                                                                                                                                                                             | Vue & Laravel                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Now UI Dashboard HTML](https://s3.amazonaws.com/creativetim_bucket/products/75/original/opt_nud_thumbnail.jpg)](https://www.creative-tim.com/product/now-ui-dashboard?ref=vnudl-readme) | [![Now UI Dashboard Laravel](https://s3.amazonaws.com/creativetim_bucket/products/211/original/opt_nud_laravel_thumbnail.jpg)](https://www.creative-tim.com/product/now-ui-dashboard-laravel?ref=vnudl-readme)  | [![Vue Now UI Dashboard Laravel](https://s3.amazonaws.com/creativetim_bucket/products/406/original/opt_nud_vuelaravel_thumbnail.jpg)](https://www.creative-tim.com/product/vue-now-ui-dashboard-laravel?ref=vnudl-readme) |



## Change log

Please see the [changelog](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Creative Tim](https://creative-tim.com/?ref=vnudl-readme)
- [UPDIVISION](https://updivision.com)

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Now UI Kit. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Now UI Kit. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/?ref=vnudl-readme).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright Creative Tim (https://www.creative-tim.com/?ref=vnudl-readme)

- Licensed under MIT (https://github.com/creativetimofficial/vue-now-ui-dashboard-laravel/blob/master/LICENSE.md)

## Useful Links

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w?ref=vnudl-readme)
- [Affiliate Program](https://www.creative-tim.com/affiliates/new?ref=vnudl-readme) (earn money)
- [Blog Creative Tim](http://blog.creative-tim.com/?ref=vnudl-readme)
- [Free Products](https://www.creative-tim.com/bootstrap-themes/free?ref=vnudl-readme) from Creative Tim
- [Premium Products](https://www.creative-tim.com/bootstrap-themes/premium?ref=vnudl-readme) from Creative Tim
- [React Products](https://www.creative-tim.com/bootstrap-themes/react-themes?ref=vnudl-readme) from Creative Tim
- [Angular Products](https://www.creative-tim.com/bootstrap-themes/angular-themes?ref=vnudl-readme) from Creative Tim
- [VueJS Products](https://www.creative-tim.com/bootstrap-themes/vuejs-themes?ref=vnudl-readme) from Creative Tim
- [More products](https://www.creative-tim.com/bootstrap-themes?ref=vnudl-readme) from Creative Tim
- Check our Bundles [here](https://www.creative-tim.com/bundles?ref=vnudl-readme)

## Social Media

### Creative Tim:

Twitter: <https://twitter.com/CreativeTim?ref=vnudl-readme>

Facebook: <https://www.facebook.com/CreativeTim?ref=vnudl-readme>

Dribbble: <https://dribbble.com/creativetim?ref=vnudl-readme>

Instagram: <https://www.instagram.com/CreativeTimOfficial?ref=vnudl-readme>

### Updivision:

Twitter: <https://twitter.com/updivision?ref=vnudl-readme>

Facebook: <https://www.facebook.com/updivision?ref=vnudl-readme>

Linkedin: <https://www.linkedin.com/company/updivision?ref=vnudl-readme>

Updivision Blog: <https://updivision.com/blog/?ref=vnudl-readme>

## Credits

- [Creative Tim](https://creative-tim.com/?ref=vnudl-readme)
- [UPDIVISION](https://updivision.com)
