import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {MenuController} from '../../controllers/Menu/Menu.controller';
import {MenuStackParamList} from '../../navigators/MenuStack';

interface Props extends StackScreenProps<MenuStackParamList, 'Menu'> {}
export const MenuView = (props: Props) => {
  return <MenuController {...props} />;
};
