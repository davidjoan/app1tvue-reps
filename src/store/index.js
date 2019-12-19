import Vue from "vue";
import Vuex from "vuex";
import moduleAuth from './auth'
import moduleOrganization from './organization'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
  },
  modules:{
    auth: moduleAuth,
    organization: moduleOrganization
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage})]
});