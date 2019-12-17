import Axios from 'axios'
import authService from '../services/AuthService'

// Axios Configuration
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://app1tpe.herokuapp.com';
Axios.defaults.withCredentials = true;

export default {
    authService: new authService(Axios)
}