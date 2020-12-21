# Contents

Discover what’s included in Bootstrap, including our precompiled and source code flavors.
Remember, Bootstrap’s JavaScript components require Bootstrap Vue.

<hr>

#### Vue Now UI Dashboard Structure

Once downloaded, unzip the compressed folder and you’ll see something like this:

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


#### Bootstrap components

Here is the list of Bootstrap 4 components that were restyled in Now UI:

<div class="row row-grid mt-5">
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Alerts</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Badge</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Buttons</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Carousel</h6>
      </div>
    </div>
  </div>
</div>

<div class="row row-grid">
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Dropdowns</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Forms</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Modal</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Navs</h6>
      </div>
    </div>
  </div>
</div>
