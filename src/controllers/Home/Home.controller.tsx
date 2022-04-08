import React from 'react';
import {HomeComponent} from '../../components/Home/Home.component';

interface Props {
  navigation: any;
}

export const HomeController = (props: Props) => {
  return <HomeComponent {...props} />;
};
