import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { LoginController } from '../../controllers/Authentication/Login.controller';

interface Props extends StackScreenProps<any, any> {}
export const Login = ({ navigation }: Props) => {
  return (
    <LoginController navigation={navigation} />
  )
}
