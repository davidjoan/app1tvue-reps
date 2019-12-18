import Vue from "vue";
import Vuex from "vuex";
import moduleAuth from './auth'
import moduleOrganization from './organization'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
  },
  modules:{
    auth: moduleAuth,
    organization: moduleOrganization
  }
});