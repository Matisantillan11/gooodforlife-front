import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {NavigationProp, RouteProp, ParamListBase} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {MenuCard} from './MenuCard';
import {CustomHeader} from '../../components/Headers/CustomHeader';

//images
import bowl from '../../assets/armatubowl.png';
import headerHome from '../../assets/headerHome.jpg';
import {MenuStackParamList} from '../../navigators/MenuStack';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<MenuStackParamList, 'Menu'>;
}

export const MenuComponent = ({navigation, route}: Props) => {
  const {category, banner} = route.params;
  const dimensions = useWindowDimensions();
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems: 'center'}}>
        <CustomHeader image={headerHome} text={category} alignText="center" />
        <MenuCard imageSource={bowl} title="Bowl de verduras" price={750} />
        <MenuCard imageSource={bowl} title="Bowl de verduras" price={750} />
        <MenuCard imageSource={bowl} title="Bowl de verduras" price={750} />
      </ScrollView>
    </>
  );
};
