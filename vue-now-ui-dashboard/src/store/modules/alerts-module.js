const state = {};

const mutations = {};

const actions = {
  success({ commit, dispatch }, message) {
    this.$app.$notify({
      message: message,
      icon: "now-ui-icons ui-1_bell-53",
      type: "success",
    });
  },

  error({ commit, dispatch }, message) {
    this.$app.$notify({
      message: message,
      icon: "now-ui-icons ui-1_bell-53",
      type: "danger",
    });
  },

};

const getters = {};

const alerts = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default alerts;
