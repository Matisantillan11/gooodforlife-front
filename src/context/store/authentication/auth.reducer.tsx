import {Token, User} from '../../../interfaces/interfaces';
import {storage} from '../../../lib/storage';

export interface AuthState {
  status: 'fetching' | 'fetched' | 'error' | 'initial';
  message: string;
  error: boolean;
  result: {
    login: {user: User; token: Token};
  };
}

export const authInitialState: AuthState = {
  status: 'initial',
  message: '',
  error: false,
  result: {
    login: {
      user: {
        _id: '',
        name: '',
        lastname: '',
        dni: 0,
        enabled: false,
        email: '',
        verified: false,
        creationDate: '',
      },
      token: {
        token: '',
        expiresIn: 0,
      },
    },
  },
};

type AuthAction =
  | {type: 'LOGIN_PENDING'}
  | {
      type: 'LOGIN_FULLFILLED';
      payload: {result: {user: User; token: Token}; status: string; message: string; error: boolean};
    }
  | {type: 'LOGIN_REJECTED'; payload: {result: any; status: string; message: string; error: boolean}};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        status: 'fetching',
      };
    }
    case 'LOGIN_FULLFILLED': {
      const {result, status, message, error} = action.payload;
      const {store} = storage();

      const token = result.token.token;
      const userId = result.user._id;

      store('token', token);
      store('user', userId);

      return {
        ...state,
        status: 'fetched',
        message,
        error: false,
        result: {
          login: {
            user: result.user,
            token: result.token,
          },
        },
      };
    }

    case 'LOGIN_REJECTED': {
      const {result, status, message, error} = action.payload;

      return {
        ...state,
        status: 'error',
        message,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
