import {Category} from '../../../interfaces/interfaces';

export interface CategoryState {
  status: 'fetching' | 'fetched' | 'error' | 'initial';
  message: string;
  error: boolean;
  result: Category[];
}

export const categoryInitialState: CategoryState = {
  status: 'initial',
  message: '',
  error: false,
  result: [],
};

type CategoryAction =
  | {type: 'GET_CATEGORIES_PENDING'}
  | {
      type: 'GET_CATEGORIES_FULLFILLED';
      payload: {
        result: Category[];
        status: string;
        message: string;
        error: boolean;
      };
    }
  | {
      type: 'GET_CATEGORIES_REJECTED';
      payload: {
        result: Category[];
        status: string;
        message: string;
        error: boolean;
      };
    };

export const categoryReducer = (
  state: CategoryState,
  action: CategoryAction,
): CategoryState => {
  switch (action.type) {
    case 'GET_CATEGORIES_PENDING': {
      return {
        ...state,
        status: 'fetching',
      };
    }
    case 'GET_CATEGORIES_FULLFILLED': {
      const {result, status, message, error} = action.payload;

      return {
        ...state,
        status: 'fetched',
        message,
        error: false,
        result,
      };
    }

    case 'GET_CATEGORIES_REJECTED': {
      const {result, status, message, error} = action.payload;

      return {
        ...state,
        status: 'error',
        message,
        error: true,
        result,
      };
    }
    default: {
      break;
    }
  }

  return state;
};
