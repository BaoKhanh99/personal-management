import Axios from 'axios';

const axiosClient = Axios.create({
  baseURL: 'http://localhost:3000',
});

axiosClient.interceptors.request.use(
  async (config) => {
    return config;
  },
  async (error) => {
    Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  async (response) => response,
  async (error) => {
    return error;
  }
);

export default axiosClient;
