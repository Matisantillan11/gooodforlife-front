import React from 'react'
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import { RequestResetComponent } from '../../components/Mail/RequestReset.component';

interface Props { navigation: NavigationProp<ParamListBase> }

export const RequestResetController = ({ navigation }: Props) => {
  return <RequestResetComponent navigation={navigation}/>
};