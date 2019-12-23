import api from "./api";
import router from "../router";

const moduleAuth = {
  namespaced: true,
  state: {
    user: {},
    token: localStorage.getItem("token") || "",
    status: "",
    auth_message: "",
    organizations: [],
    organization_selected: {},
    target: []
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state,payload) {
      state.status = "success";
      state.token = payload.token;
      state.user = payload.user;
      state.organizations = payload.organizations;
      state.organization_selected = payload.organization_selected;
      state.auth_message = payload.message;

      console.log('copied');
      console.log(payload.user);
      console.log(payload.message);
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
    setOrganizationSelected(state, payload) {
      state.organization_selected = payload;
    },
    setTarget(state, payload) {
      state.target = payload;
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getUser: state => state.user
  },
  actions: {
    logoutUser({ commit }) {
      commit("logout");
      router.push({ name: "Login" });
    },
    selectOrganization({ commit }, organization) {
      commit("setOrganizationSelected", organization);
    },
    loginUser({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        api
          .post("login", payload)
          .then(response => {
            const token = `Bearer ${response.data.data.success.token}`;
            const user = response.data.data.success.user;
            const organizations = response.data.data.success.organizations;
            const organization_selected =
              response.data.data.success.organization_selected;
            const message = response.data.message;

            localStorage.setItem("token", token);
            api.defaults.headers.common["Authorization"] = token;
            console.log(response);
            commit(
              "auth_success",{
              token,
              user,
              organizations,
              organization_selected,
              message }
            );
            resolve(response);
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    getTarget({ commit, state }){

      return new Promise((resolve, reject) => {
        console.log('get target');
        console.log(state.organization_selected);
        api.get(`target/${state.organization_selected.id}`)
        .then(function(response) {
          console.log(response);
          commit('setTarget', response.data.data);
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });

      });

 
    }

  },
  modules: {}
};
export default moduleAuth;
