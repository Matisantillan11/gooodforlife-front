import React from 'react';
import {HomeController} from '../../controllers/Home/Home.controller';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigators/HomeStack';

interface Props extends StackScreenProps<HomeStackParamList, 'Home'> {}
export const HomeView = (props: Props) => {
  return <HomeController {...props} />;
};
