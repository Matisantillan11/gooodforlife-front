import React from 'react'
import { ResetPasswordController } from '../../../controllers/Mail/ResetPassword.Controller'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigators/PrincipalStack';


interface Props extends StackScreenProps<RootStackParamList, 'ResetPassword'>{}
export const ResetPasswordView = (props: Props) => {
  return <ResetPasswordController { ...props }/>
};
