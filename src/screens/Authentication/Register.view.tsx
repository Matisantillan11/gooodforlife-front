import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigators/PrincipalStack';
import { RegisterController } from "../../controllers/Authentication/Register.controller"

interface Props extends StackScreenProps<RootStackParamList, 'Register'>{}

export const RegisterView = (props: Props) => {
  return <RegisterController {...props} />;
};
