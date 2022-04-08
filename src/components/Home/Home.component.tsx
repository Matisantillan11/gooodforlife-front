import React from 'react';
import {Text, View} from 'react-native';
import {CustomHeader} from '../Headers/CustomHeader';
//images
import headerHome from '../../assets/headerHome.jpg';
import {ScrollView} from 'react-native-gesture-handler';
import {CardHome} from './CardHome';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
interface Props {
  navigation: NavigationProp<ParamListBase>;
}
export const HomeComponent = ({navigation}: Props) => {
  return (
    <>
      <CustomHeader image={headerHome} text="En GoodForLife cocinamos rico, sano y natural para vos..." />
      <ScrollView style={{flex: 1}}>
        <CardHome
          text="Mirá todas nuestras recetas y elegí la que más te guste para hacer en tu cocina"
          pressableText="Ver recetas"
        />
        <CardHome
          onPress={() => navigation.navigate('MenuStack')}
          text="Elegí el menú que mas se adapte a tu dieta"
          pressableText="Ver menús"
        />
        <CardHome text="Arma el plato como a vos te gusta. 100% PERSONALIZADO" pressableText="Armá tu plato" />
        <CardHome text="¿Quieres repetir? Mirá lo que compraste anteriormente" pressableText="Ver historial" />
        <CardHome
          text="¿Quieres estar al tanto de los nuevos platos? Subscribite a nuestro newsletter."
          pressableText="Subscrimirme"
        />
      </ScrollView>
    </>
  );
};
