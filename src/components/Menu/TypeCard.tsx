import React from 'react'
import { ImageBackground, Text, useWindowDimensions, View, ImageSourcePropType, StyleSheet, Pressable } from 'react-native';

interface Props {
  text: string,
  image: ImageSourcePropType,
  onPress: () => void
}

export const TypeCard = ({ text, image, onPress }: Props) => {
  const dimensions = useWindowDimensions()

  return (
    <Pressable onPress={onPress}>
    <View style={[ styles.cardContainer, {width: dimensions.width * 0.33, height: dimensions.height * 0.25 }] }>
      <ImageBackground source={image} style={styles.image}>
        <View />
      </ImageBackground>
        
      <Text numberOfLines={2}  style={styles.text}>{ text }</Text>    
    </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center', marginHorizontal: '5%', marginVertical:' 2.5%',
  },
  image: {flex: 1, height: '90%', marginVertical: '5%'},
  text:{
    textAlign: 'center', 
    alignSelf:'center',
    textTransform: 'capitalize'
  }
})