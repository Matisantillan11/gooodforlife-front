import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://goodforlife-api.herokuapp.com',
});

/* apiConfig.interceptors.response.use(
  async (config) => {
      const token = await AsyncStorage.getItem('token')
      if (token) config.headers['x-token'] = token

      return config
  }
) */
