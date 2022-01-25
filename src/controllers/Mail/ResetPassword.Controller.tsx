import React from 'react' 
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import { ResetPasswordComponent } from '../../components/Mail/ResetPassword.component'
interface Props { navigation: NavigationProp<ParamListBase> }
export const ResetPasswordController = ({ navigation }: Props) => {
  return <ResetPasswordComponent navigation={navigation} />;
};
