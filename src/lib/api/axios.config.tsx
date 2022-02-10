import axios from "axios"

export const api = axios.create({
  baseURL: `${process.env.API_URL}`
})

/* apiConfig.interceptors.response.use(
  async (config) => {
      const token = await AsyncStorage.getItem('token')
      if (token) config.headers['x-token'] = token

      return config
  }
) */
