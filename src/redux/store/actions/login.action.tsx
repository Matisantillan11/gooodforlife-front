import {api} from '../../../lib/api/axios.config';

export const loginWithEmail = () => {
  const payload = api.post('/auth/login/goodforlife', {
    email: 'matias1.santillan@gmail.com',
    password: 'P0r0ng4_',
  });

  return {
    type: 'LOGIN',
    payload,
  };
};
