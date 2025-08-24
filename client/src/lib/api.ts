import axios from 'axios';
const BACKEND_API = 'https://localhost:5000/api';

export const api = axios.create({
    baseURL: BACKEND_API,
});

export default api;