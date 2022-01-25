import React from 'react' 
import { ResetPasswordComponent } from '../../components/Mail/ResetPassword.component'
interface Props { navigation: any }
export const ResetPasswordController = ({ navigation }: Props) => {
  return <ResetPasswordComponent navigation={navigation} />;
};
