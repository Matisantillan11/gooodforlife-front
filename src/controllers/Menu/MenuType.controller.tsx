import React from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { MenuTypeComponent } from '../../components/Menu/MenuType.component';

interface Props {
  navigation: NavigationProp<ParamListBase>
}

export const MenuTypeController = (props: Props) => {
  return <MenuTypeComponent {...props} />;
};
