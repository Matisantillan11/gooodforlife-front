import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {MenuDescription} from '../../components/Menu/MenuDescription.component';
import {MenuStackParamList} from '../../navigators/MenuStack';

interface Props extends StackScreenProps<MenuStackParamList, 'MenuDescription'> {}
export const MenuDescriptionController = (props: Props) => {
  return <MenuDescription {...props} />;
};
