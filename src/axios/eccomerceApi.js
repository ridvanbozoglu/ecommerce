import axios from 'axios';

const api = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});


api.interceptors.request.use(
  function (config) {
    const token =localStorage.getItem('token') || sessionStorage.getItem('token');
    if(token){
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
