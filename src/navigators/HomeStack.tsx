import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../lib/colors'
import Icon  from 'react-native-vector-icons/MaterialIcons'

//screens
import { HomeView as Home} from '../screens/Home/Home.view'
import { MenuStackParamList, MenuStack } from './MenuStack';



export type HomeStackParamList = {
  Home: undefined
  MenuStack: MenuStackParamList
};

const Tab = createBottomTabNavigator<HomeStackParamList>();

export const HomeStack = ()  => {
  return (
    <Tab.Navigator 
    sceneContainerStyle={{
      backgroundColor: '#f1f1f1',
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        let iconName: string = '';
        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'MenuStack':
            iconName = 'book';
            break;
        

        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarInactiveTintColor: "#F1F1F1",
      tabBarActiveTintColor: '#4BAF50',
      tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},
      headerShown: false,
      tabBarStyle: {
        backgroundColor: 'linear-gradient(to right, rgba(146, 198, 78, 0.76), rgba(102,175,75, 0.73))'
      }
    })}
    >
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Inicio'}} />
      <Tab.Screen name="MenuStack" component={MenuStack} options={{ tabBarLabel: 'Menúes'}} />
    </Tab.Navigator>
  );
}