import axios from "axios";

const moduleOrganzation = {
  namespaced: true,
  state: {
    organizations: [],
  },
  mutations: {
    setOrganization(state, payload) {
      state.organizations = payload;
    }
  },
  actions: {
    getOrganization ({ commit, rootState}) {
      axios.get(`${process.env.VUE_APP_API_URL}/api/v1/organizations?filter[user_id]=${rootState.auth.user.id}`)
      .then(function(response) {
        commit('setOrganization', response.data.data);
        return response;
      })
      .catch(function(error) {
        return error;
      });
    },
  },
  modules: {}
};
export default moduleOrganzation;