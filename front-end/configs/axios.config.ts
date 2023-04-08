import Axios from 'axios'
import Cookies from 'js-cookie'

const axiosClient = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
})

axiosClient.interceptors.request.use(
  async (config) => {
    const token = {
      accessToken: Cookies.get('accessToken'),
      refreshToken: Cookies.get('refreshToken'),
    }

    if (token?.accessToken) {
      config.headers.Authorization = `Bearer ${token?.accessToken}`
    }

    return config
  },
  (error) => Promise.reject(error),
)

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => Promise.reject(error),
)

export default axiosClient
