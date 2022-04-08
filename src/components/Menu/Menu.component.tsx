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
        <MenuCard
          imageSource={bowl}
          onPressInformation={() =>
            navigation.navigate('MenuDescription', {
              title: 'Bowl de verduras',
              price: 750,
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            })
          }
          title="Bowl de verduras"
          price={750}
        />
        <MenuCard
          imageSource={bowl}
          onPressInformation={() =>
            navigation.navigate('MenuDescription', {
              title: 'Bowl de verduras',
              price: 750,
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            })
          }
          title="Bowl de verduras"
          price={750}
        />
        <MenuCard
          imageSource={bowl}
          onPressInformation={() =>
            navigation.navigate('MenuDescription', {
              title: 'Bowl de verduras',
              price: 750,
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            })
          }
          title="Bowl de verduras"
          price={750}
        />
      </ScrollView>
    </>
  );
};
