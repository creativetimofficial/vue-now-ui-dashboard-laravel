import Vue from 'vue';
import Vuex from 'vuex';

import auth from "./modules/auth";
import reset from "./modules/reset";
import alerts from "./modules/alerts-module";
import profile from "./modules/profile-module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    reset,
    alerts,
    profile,
  }
});
