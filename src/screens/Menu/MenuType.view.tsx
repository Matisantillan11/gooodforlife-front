import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {MenuTypeController} from '../../controllers/Menu/MenuType.controller';
import {MenuStackParamList} from '../../navigators/MenuStack';

interface Props extends StackScreenProps<MenuStackParamList, 'MenuType'> {}
export const MenuTypeView = (props: Props) => {
  return <MenuTypeController {...props} />;
};
