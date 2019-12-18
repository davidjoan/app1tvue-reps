import Axios from 'axios'
import AuthService from '../services/AuthService'
import OrganizationService from '../services/OrganizationService';

// Axios Configuration
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.withCredentials = true;

export default {
    organizationService: new OrganizationService(Axios)
}