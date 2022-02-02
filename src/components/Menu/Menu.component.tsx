import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { MenuCard } from './MenuCard';


//images
import bowl from '../../assets/armatubowl.png'

interface Props {
  navigation: NavigationProp<ParamListBase>
}


export const MenuComponent = ({ navigation }: Props) => {
  const dimensions = useWindowDimensions()
  return (
  <>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center'}} >
      <MenuCard imageSource={bowl} title="Bowl de verduras" price={750} />
      <MenuCard imageSource={bowl} title="Bowl de verduras" price={750} />
      <MenuCard imageSource={bowl} title="Bowl de verduras" price={750} />
    </ScrollView>
  </> 
  );
};
