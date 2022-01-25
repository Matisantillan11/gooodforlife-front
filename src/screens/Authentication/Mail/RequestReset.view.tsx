import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigators/PrincipalStack';
import { RequestResetController } from '../../../controllers/Mail/RequestReset.controller';

interface Props extends StackScreenProps<RootStackParamList, 'RequestReset'>{}
export const RequestResetView = ( props: Props ) => {
  return <RequestResetController { ...props} />;
};