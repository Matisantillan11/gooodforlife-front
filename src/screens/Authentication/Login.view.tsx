import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigators/PrincipalStack';
import { LoginController } from '../../controllers/Authentication/Login.controller';

interface Props extends StackScreenProps<RootStackParamList, 'Login'> {}
export const Login = ({ navigation }: Props) => {
  return (
    <LoginController navigation={navigation} />
  )
}
