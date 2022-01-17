import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Authentication/Login.view';

const Stack = createStackNavigator();
export const PrincipalStack = ()  => {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#FFFFFF'},
    }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}