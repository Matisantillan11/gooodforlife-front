import React from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import {NavigationProp, RouteProp, ParamListBase} from '@react-navigation/native';
import {MenuStackParamList} from '../../navigators/MenuStack';

import bowl from '../../assets/armatubowl.png';
//import {ScrollView} from 'react-native-gesture-handler';
interface Props {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<MenuStackParamList, 'MenuDescription'>;
}

export const MenuDescription = ({route, navigation}: Props) => {
  const {width} = useWindowDimensions();
  const {title, price, description} = route.params;
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <Image style={styles.image} source={bowl} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>${price}</Text>
          </View>
          <View style={styles.line} />

          <Text style={styles.description}>{description}</Text>

          <View style={{flex: 1, width, paddingLeft: 20}}>
            <Text style={styles.subtitle}>Ingredientes</Text>
            <View style={styles.line} />

            <View>
              <View>
                <Text> * </Text>
                <Text>Ingrediente 1</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
  },
  image: {width: '70%', height: '45%'},
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {fontSize: 20, fontWeight: 'bold'},
  price: {fontSize: 18, fontWeight: 'bold'},
  line: {backgroundColor: '#C4C4C4', width: '100%', height: 3, marginVertical: 15},
  description: {
    fontSize: 16,
    lineHeight: 20,
  },
  subtitle: {margin: 20, fontSize: 18, fontWeight: 'bold'},
});
