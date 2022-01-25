import React from "react";
import { CheckEmailController } from "../../../controllers/Mail/CheckEmail.controller";
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from "../../../navigators/PrincipalStack";

interface Props extends StackScreenProps<RootStackParamList, 'CheckEmail'>{}
export const CheckEmailView = (props: Props) => {
  return <CheckEmailController {...props}/>;
};
