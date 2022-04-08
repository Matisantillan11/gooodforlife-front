import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {LoginComponent} from '../../components/Authentication/Login.component';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {CategoryContext} from '../../context/store/category/categoryContext';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}
export const LoginController = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const {getAll, result, status, message} = useContext(CategoryContext);

  const loginUser = () => {};

  return <LoginComponent {...props} login={loginUser} />;
};
