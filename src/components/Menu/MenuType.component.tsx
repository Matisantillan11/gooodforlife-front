import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {TypeCard} from './TypeCard';
import palta from '../../assets/avocado.png';
import {ScrollView} from 'react-native-gesture-handler';
import {Category} from '../../interfaces/interfaces';
import {Loader} from '../Loader/loader.component';

interface Props {
  navigation: NavigationProp<ParamListBase>;
  categories: Category[];
  isLoading: 'fetching' | 'fetched' | 'error' | 'initial';
  message: string;
}

export const MenuTypeComponent = ({navigation, categories, isLoading, message}: Props) => {
  const dimensions = useWindowDimensions();

  return (
    <>
      {isLoading === 'fetching' ? (
        <Loader />
      ) : (
        <View
          style={[
            styles.root,
            {
              width: dimensions.width,
              paddingTop: dimensions.width * 0.1,
              paddingLeft: dimensions.width * 0.05,
            },
          ]}>
          <Text style={styles.text}> Mati, ¿que tipo de menú prefieres? </Text>
          <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                paddingVertical: 20,
              }}>
              {categories?.map((category: Category) => (
                <TypeCard
                  key={category._id}
                  onPress={() => navigation.navigate('Menu', {category: category.name})}
                  text={category.name}
                  image={palta}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666666',
  },
});
