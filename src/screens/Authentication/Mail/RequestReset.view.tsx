import React from 'react'
import { RequestResetController } from '../../../controllers/Mail/RequestReset.controller';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigators/PrincipalStack';

interface Props extends StackScreenProps<RootStackParamList, 'RequestReset'>{}
export const RequestResetView = ( props: Props ) => {
  return <RequestResetController { ...props} />;
};