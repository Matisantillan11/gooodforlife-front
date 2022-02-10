import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from '../../navigators/HomeStack';
import { MenuTypeController } from '../../controllers/Menu/MenuType.controller';

interface Props extends StackScreenProps<HomeStackParamList, 'MenuType'>{}
export const MenuTypeView = (props: Props) => {
  return <MenuTypeController {...props} />;
};

