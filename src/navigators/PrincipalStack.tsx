import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { Login } from '../screens/Authentication/Login.view';
import { RegisterView as Register } from '../screens/Authentication/Register.view';
import { CheckEmailView as CheckEmail} from '../screens/Authentication/Mail/CheckEmail.view';
import { RequestResetView as RequestReset} from '../screens/Authentication/Mail/RequestReset.view';
import { ResetPasswordView as ResetPassword } from '../screens/Authentication/Mail/ResetPassword.view';

import { colors } from '../lib/colors';


export type RootStackParamList = {
  Login: undefined
  Register: undefined
  RequestReset: undefined
  CheckEmail: { text: string }
  ResetPassword: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

export const PrincipalStack = ()  => {
  return (
    <Stack.Navigator 
    screenOptions={{
      /* headerLeft: () => <Icon name="" size={40} color={colors.lightGreen} style={{marginLeft: 20}}/>, */
      headerTintColor: colors.dark,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      cardStyle: {backgroundColor: '#FFFFFF'},
      
    }}
    >
      <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register}  options={{headerShown:false}} />
      <Stack.Screen name="RequestReset" component={RequestReset} options={{ title: 'Back'}}/>
      <Stack.Screen name="CheckEmail" component={CheckEmail}  options={{headerShown:false}} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{  title: 'Back'}}/>
    </Stack.Navigator>
  );
}