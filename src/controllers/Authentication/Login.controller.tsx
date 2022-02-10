import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { LoginComponent } from '../../components/Authentication/Login.component'
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import * as loginAction from '../../redux/store/actions/login.action'
interface Props {
  navigation: NavigationProp<ParamListBase>
}
export const LoginController = (props: Props) => {
  const dispatch = useDispatch()
  const loginReducer = useSelector((store: any) => store.loginReducer)

  const loginUser = () => {
    props.navigation.navigate('HomeStack')
  }

  return (
    <LoginComponent {...props} login={loginUser}  loginReducer={loginReducer}/>
  )
}
