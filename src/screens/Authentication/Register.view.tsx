import React from 'react'
import { RegisterController } from "../../controllers/Authentication/Register.controller"
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{}

export const RegisterView = (props: Props) => {
  return <RegisterController {...props} />;
};
