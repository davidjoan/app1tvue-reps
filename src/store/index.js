import Vue from "vue";
import Vuex from "vuex";
import services from './services'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    services,
    user : {},
    token: '',
    status: false,
    auth_message : ''
  },
  mutations: {
    authenticated(state, payload){
      state.token = payload.token
      state.auth_message = payload.message
      state.status = true
    },
    logout(state){
      state.token = ''
      state.auth_message = null
      state.status = false
      state.user = {}
    },
    setAuthMessage(state, payload){
      state.auth_message = payload.message
    },
    setUser(state, payload){
      state.user = payload
    }
  },
  actions: {},
  modules: {}
});