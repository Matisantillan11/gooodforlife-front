import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PrincipalStack} from './src/navigators/PrincipalStack';

import {CategoryProvider} from './src/context/store/category/categoryContext';

export const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <PrincipalStack />
      </NavigationContainer>
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <CategoryProvider>{children}</CategoryProvider>;
};
