import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../lib/colors';
import Icon  from 'react-native-vector-icons/MaterialIcons';

//screens
import { HomeView as Home} from '../screens/Home/Home.view'
import { MenuView  as Menu} from '../screens/Menu/Menu.view';



export type HomeStackParamList = {
  Home: undefined
  Menu: undefined
};

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStack = ()  => {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerLeft: () => <Icon name="menu" size={50} color={colors.white} style={{marginLeft: 20}}/>,
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: '600',
      },
      headerStyle:{
        backgroundColor: 'linear-gradient(to right, rgba(146, 198, 78, 0.76), rgba(102,175,75, 0.73))',
      },
      cardStyle: {backgroundColor: '#FFFFFF'},
    }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}