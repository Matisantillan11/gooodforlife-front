import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { PrincipalStack } from './src/navigators/PrincipalStack';
import { Provider } from 'react-redux';
import store from './src/redux'

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PrincipalStack />
      </NavigationContainer>
    </Provider>
  )
}
