import React from 'react'
import { RegisterComponent } from "../../components/Authentication/Register.component";

interface Props {
  navigation: any
}
export const RegisterController = ({ navigation }: Props) => {
  return <RegisterComponent navigation={navigation} />;
};
