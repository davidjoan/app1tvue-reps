import Vue from "vue";
import Vuex from "vuex";
import moduleAuth from "./auth.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    auth: moduleAuth
  },
plugins: [createPersistedState({
  storage: window.sessionStorage})]
});

