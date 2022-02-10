import React from 'react';
import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { TypeCard } from './TypeCard';
import palta from '../../assets/avocado.png'
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  navigation: NavigationProp<ParamListBase>
}

export const MenuTypeComponent = ({ navigation }: Props) => {
  const dimensions = useWindowDimensions()

  return (
  <>
    <View style={{ flex: 1, width: dimensions.width}} >
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', paddingVertical: 20 }}>
          <TypeCard onPress={()=> navigation.navigate('Menu')}text="vegano" image={palta}/>
          <TypeCard onPress={()=> navigation.navigate('Menu')}text="vegetariano" image={palta}/>
          <TypeCard onPress={()=> navigation.navigate('Menu')}text="con carne" image={palta}/>
          <TypeCard onPress={()=> navigation.navigate('Menu')}text="sin harina" image={palta}/>
          <TypeCard onPress={()=> navigation.navigate('Menu')}text="gluten free" image={palta}/>
          <TypeCard onPress={()=> navigation.navigate('Menu')}text="postres" image={palta}/>
        </View>
      </ScrollView>
    </View>
  </> 
  );
};