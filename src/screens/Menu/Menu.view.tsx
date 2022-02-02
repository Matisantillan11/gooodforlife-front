import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from '../../navigators/HomeStack';
import { MenuController } from '../../controllers/Menu/Menu.controller';

interface Props extends StackScreenProps<HomeStackParamList, 'Menu'>{}
export const MenuView = (props: Props) => {
  return <MenuController {...props} />;
};
