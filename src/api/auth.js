import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Example auth API functions
export const authAPI = {
  login: async (credentials) => {
    // Map username to email for backend compatibility if needed
    const payload = credentials.username ? { username: credentials.username, password: credentials.password } : credentials;
    const res = await axios.post(`${API_BASE_URL}/auth/login`, payload);
    return res.data;
  },
  register: async (data) => {
    const res = await axios.post(`${API_BASE_URL}/auth/register`, data);
    return res.data;
  },
  logout: async () => {
    const res = await axios.post(`${API_BASE_URL}/auth/logout`);
    return res.data;
  },
  getProfile: async () => {
    const res = await axios.get(`${API_BASE_URL}/auth/profile`);
    return res.data;
  },
};