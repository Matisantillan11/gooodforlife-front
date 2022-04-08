import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {MenuDescriptionController} from '../../controllers/Menu/MenuDescription.controller';
import {MenuStackParamList} from '../../navigators/MenuStack';

interface Props extends StackScreenProps<MenuStackParamList, 'MenuDescription'> {}
export const MenuDescriptionView = (props: Props) => {
  return <MenuDescriptionController {...props} />;
};
