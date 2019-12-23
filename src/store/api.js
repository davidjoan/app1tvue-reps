import axios from 'axios'

// Axios Configuration
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

const api = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}/api/v1`,
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json',
      },
  });
  
export default api;