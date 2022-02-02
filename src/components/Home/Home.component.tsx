import React from 'react';
import { Text, View } from 'react-native';
import { CustomHeader } from '../Headers/CustomHeader';
//images
import headerHome from '../../assets/headerHome.jpg'
import { ScrollView } from 'react-native-gesture-handler';
import { CardHome } from './CardHome';

export const HomeComponent = () => {
  return (
    <>
      <CustomHeader image={headerHome} text="En GoodForLife cocinamos rico, sano y natural para vos..." />  
      <ScrollView style={{flex: 1 }}>
        <CardHome text="" pressableText='Ver recetas'/>
        <CardHome text="" pressableText='Ver menús'/>
        <CardHome text="" pressableText='Armá tu plato'/>
        <CardHome text="" pressableText='Ver historial'/>
        <CardHome text="" pressableText='Subscrimirme'/>
      </ScrollView>
    </>
  );
};
