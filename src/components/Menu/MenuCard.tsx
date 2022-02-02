import React from 'react';
import { Image, Pressable, ImageSourcePropType, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { colors } from '../../lib/colors';
import Icon  from 'react-native-vector-icons/Ionicons';

interface Props {
  imageSource: ImageSourcePropType,
  title: string,
  price: number
}

export const MenuCard = ({ imageSource, title, price }: Props) => {
  const dimensions = useWindowDimensions()

  return (
    <View style={[ styles.card, { width: dimensions.width * 0.60, height: dimensions.height * 0.40, marginHorizontal: dimensions.width * 0.10 }]}>
      
      <View style={styles.cardImage}>
        <Image style={styles.image} source={imageSource}/>
      </View>
      
      <Text>{ title }</Text>
      <Text>${ price }</Text>

      <View style={styles.buttonsContainer}>
        <Pressable style={styles.cartBtn}>
          <Icon name="cart" size={30}/>
        </Pressable>

        <Pressable style={styles.cartBtn}>
          <Icon name="information" size={30}/>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: -4,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 7,
    marginVertical: 20,
  }, 
  cardImage: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    marginBottom: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  image: {
    height: '100%'
  },
  cartBtn: {
    backgroundColor: 'rgba(181, 179, 244, .33)',
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  }
})
