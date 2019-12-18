import store from "../store/index";
import Axios from "axios";

class AuthService {
  login(email, password) {
    return Axios.post(`${process.env.VUE_APP_API_URL}/api/v1/login`, {
      email: email,
      password: password
    })
      .then(function(response) {
        const token = response.data.data.success.token;
        const message = response.data.message;
        store.commit("authenticated", { token, message });
        Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        return response;
      })
      .catch(function(error) {
        return error;
      });
  }

  logout() {
    store.commit("logout");
  }

  getUser() {
    return Axios.get(`${process.env.VUE_APP_API_URL}/api/v1/getUser`)
      .then(function(response) {
        store.commit("setUser", response.data.data);
        return response;
      })
      .catch(function(error) {
        return error;
      });
  }
}

export default AuthService;
