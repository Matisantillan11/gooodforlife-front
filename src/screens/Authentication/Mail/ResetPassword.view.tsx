import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigators/PrincipalStack';
import { ResetPasswordController } from '../../../controllers/Mail/ResetPassword.Controller'


interface Props extends StackScreenProps<RootStackParamList, 'ResetPassword'>{}
export const ResetPasswordView = (props: Props) => {
  return <ResetPasswordController { ...props }/>
};
