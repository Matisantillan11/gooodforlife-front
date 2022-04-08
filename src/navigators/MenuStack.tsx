import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from '../lib/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

//screens
import {MenuView as Menu} from '../screens/Menu/Menu.view';
import {MenuTypeView as MenuType} from '../screens/Menu/MenuType.view';
import {MenuDescriptionView as MenuDescription} from '../screens/Menu/MenuDescription.view';

export type MenuStackParamList = {
  MenuType: undefined;
  Menu: {category: string; banner: string};
  MenuDescription: {picture: string; title: string; price: number; description: string; ingredients: string[]};
};

const Stack = createStackNavigator<MenuStackParamList>();

export const MenuStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <Icon name="menu" size={50} color={colors.white} style={{marginLeft: 20}} />,
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: '600',
        },
        headerStyle: {
          backgroundColor: 'linear-gradient(to right, rgba(146, 198, 78, 0.76), rgba(102,175,75, 0.73))',
        },
        cardStyle: {backgroundColor: '#FFFFFF'},
      }}>
      <Stack.Screen name="MenuType" component={MenuType} options={{title: ''}} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="MenuDescription" component={MenuDescription} />
    </Stack.Navigator>
  );
};
