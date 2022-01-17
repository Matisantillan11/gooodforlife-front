import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { PrincipalStack } from './src/navigators/PrincipalStack';

export const App = () => {
  return (
    <NavigationContainer>
      <PrincipalStack />
    </NavigationContainer>
  )
}
