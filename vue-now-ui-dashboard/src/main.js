/*!

 =========================================================
 * Vue Now UI Dashboard Laravel - v1.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/vue-now-ui-dashboard-laravel
 * Copyright Creative Tim (http://www.creative-tim.com) & UPDIVISION (https://www.updivision.com)

 * Coded by www.creative-tim.com & www.invisionapp.com & www.updivision.com
 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

import Vue from 'vue';
import axios from "axios";
import DashboardPlugin from './dashboard-plugin';

// Plugins
import App from './App.vue';
import VueAxios from "vue-axios";
import IsDemo from "./components/isDemo"
import VueMeta from 'vue-meta';

import "./assets/css/demo.css";

// router setup
import routes from './routes';
import store from "./store";

// plugin setup
Vue.use(DashboardPlugin);
Vue.use(VueAxios, axios);
Vue.use(IsDemo);
Vue.use(VueMeta, { keyName: 'head' });



/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  render: h => h(App),
  router: routes,
  store:store
});

store.$app = app;

