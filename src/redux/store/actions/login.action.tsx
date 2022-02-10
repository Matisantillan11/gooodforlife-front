import { api } from "../../../lib/api/axios.config"

export const loginWithEmail = () => {

  const payload = api.get('/category/withauth/goodforlife')

  return {
    type: 'LOGIN',
    payload
  }

}