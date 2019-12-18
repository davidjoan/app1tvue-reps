import axios from "axios";

const moduleOrganzation = {
  state: {
    organization: {},
  },
  mutations: {
    setOrganization(state, payload) {
      state.organization = payload;
    }
  },
  actions: {
    async getOrganization({ commit, rootState}) {
      axios.get(`${process.env.VUE_APP_API_URL}/api/v1/organizations?filter[user_id]=${rootState.auth.user.id}`)
      .then(function(response) {
        commit('setOrganization', response.data);
        console.log(response);
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
