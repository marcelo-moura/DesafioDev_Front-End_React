import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

api.interceptors.request.use(function (config) {

    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization =  `Bearer ${token}`;
    }

    return config;
});

export default api;
