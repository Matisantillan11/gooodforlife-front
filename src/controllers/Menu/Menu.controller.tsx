import React from 'react';
import {NavigationProp, RouteProp, ParamListBase} from '@react-navigation/native';
import {MenuComponent} from '../../components/Menu/Menu.component';
import {StackScreenProps} from '@react-navigation/stack';
import {MenuStackParamList} from '../../navigators/MenuStack';

interface Props extends StackScreenProps<MenuStackParamList, 'Menu'> {}

export const MenuController = (props: Props) => {
  return <MenuComponent {...props} />;
};
