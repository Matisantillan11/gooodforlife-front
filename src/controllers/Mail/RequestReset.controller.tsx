import React from 'react'
import { RequestResetComponent } from '../../components/Mail/RequestReset.component';

interface Props { navigation: any }

export const RequestResetController = ({ navigation }: Props) => {
  return <RequestResetComponent navigation={navigation}/>
};