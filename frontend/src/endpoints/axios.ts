import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Enables cookies (if required)
});

export default axiosInstance;