import React, {useContext, useEffect, useMemo} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {MenuTypeComponent} from '../../components/Menu/MenuType.component';
import {CategoryContext} from '../../context/store/category/categoryContext';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}

export const MenuTypeController = (props: Props) => {
  const {getAll, result, status, error, message} = useContext(CategoryContext);

  useEffect(() => {
    getAll();
  }, []);

  const categories = useMemo(() => {
    if (status === 'fetched' && Array.isArray(result) && !error) return result;
    return [];
  }, [result]);

  return <MenuTypeComponent {...props} categories={categories} isLoading={status} message={message} />;
};
