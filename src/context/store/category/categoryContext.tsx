import React, {createContext, useReducer} from 'react';
import {Category} from '../../../interfaces/interfaces';
import {api} from '../../../lib/api/axios.config';
import {categoryInitialState, categoryReducer} from './category.reducer';

type CategoryContextProps = {
  getAll: () => void;
  result: Category[];
  error: boolean;
  status: 'fetching' | 'fetched' | 'error' | 'initial';
  message: string;
};

export const CategoryContext = createContext({} as CategoryContextProps);

export const CategoryProvider = ({children}: any) => {
  const [categoryState, dispatch] = useReducer(
    categoryReducer,
    categoryInitialState,
  );

  const getAll = async () => {
    dispatch({type: 'GET_CATEGORIES_PENDING'});
    const aggregations = {};

    try {
      const payload = await api.get(
        `/category/withoutAuth/goodforlife?${aggregations}`,
      );

      if (Array.isArray(payload.data.result)) {
        return dispatch({
          type: 'GET_CATEGORIES_FULLFILLED',
          payload: {
            result: payload.data.result,
            status: 'fetched',
            message: payload.data.message,
            error: payload.data.error,
          },
        });
      } else {
        return dispatch({
          type: 'GET_CATEGORIES_REJECTED',
          payload: {
            result: [],
            status: 'error',
            message: payload.data.message,
            error: payload.data.error,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        ...categoryState,
        getAll,
      }}>
      {children}
    </CategoryContext.Provider>
  );
};
