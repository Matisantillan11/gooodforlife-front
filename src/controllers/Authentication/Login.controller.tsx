import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { LoginComponent } from '../../components/Authentication/Login.component'
import {NavigationProp, ParamListBase} from '@react-navigation/native';
interface Props {
  navigation: NavigationProp<ParamListBase>
}
export const LoginController = (props: Props) => {
  return (
    <LoginComponent {...props} />
  )
}
