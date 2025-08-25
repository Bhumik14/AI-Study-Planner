import axios from 'axios';
const BACKEND_API = 'http://localhost:3000/api';

export const api = axios.create({
    baseURL: BACKEND_API,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;