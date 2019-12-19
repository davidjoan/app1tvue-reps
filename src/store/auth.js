import axios from "axios";
import router from "../router";

const moduleAuth = {
  namespaced: true,
  state: {
    user: {},
    token: "",
    status: false,
    auth_message: ""
  },
  mutations: {
    authenticated(state, payload) {
      state.token = payload.token;
      state.auth_message = payload.message;
      state.status = true;
    },
    logout(state) {
      state.token = "";
      state.auth_message = null;
      state.status = false;
      state.user = {};
    },
    setAuthMessage(state, payload) {
      state.auth_message = payload.message;
    },
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    async getUser({ commit }) {
      await axios
        .get(`${process.env.VUE_APP_API_URL}/api/v1/getUser`)
        .then(function(response) {
          commit("setUser", response.data.data);
          return response;
        });
    },
    logoutUser({ commit }) {
      commit("logout");
      router.push({ name: "Login" });
    },
    async loginUser({ commit, dispatch }, payload) {
      return axios
        .post(`${process.env.VUE_APP_API_URL}/api/v1/login`, {
          email: payload.username,
          password: payload.password
        })
        .then(function(response) {
          if (response.status === 200 && response.data.success === true) {
            const token = response.data.data.success.token;
            const message = response.data.message;
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            commit("authenticated", { token, message });
            dispatch("getUser").then(function() {
              dispatch("organization/getOrganization", {}, { root: true }).then(
                function() {
                  router.push({ name: "Home" });
                }
              );
            });
          }
        })
        .catch(function() {
          router.push("/");
        });
    }
  },
  modules: {}
};
export default moduleAuth;
