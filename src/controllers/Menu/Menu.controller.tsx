import React from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { MenuComponent } from '../../components/Menu/Menu.component';

interface Props {
  navigation: NavigationProp<ParamListBase>
}

export const MenuController = (props: Props) => {
  return <MenuComponent {...props} />;
};
