/*!

 =========================================================
 * Vue Now UI Dashboard PRO - v1.1.1
 =========================================================

 * Product Page: http://www.creative-tim.com/product/now-ui-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

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

