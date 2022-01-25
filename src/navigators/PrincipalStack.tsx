import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Authentication/Login.view';
import { RegisterView as Register } from '../screens/Authentication/Register.view';
import { CheckEmailView as CheckEmail} from '../screens/Authentication/Mail/CheckEmail.view';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  CheckEmail: { text: string }
};

const Stack = createStackNavigator<RootStackParamList>();

export const PrincipalStack = ()  => {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#FFFFFF'},
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="CheckEmail" component={CheckEmail} />
    </Stack.Navigator>
  );
}