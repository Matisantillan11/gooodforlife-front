import React from 'react';
import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { colors } from '../../lib/colors';

//images
import plant from '../../assets/lemon-hoja.png'
interface Props{
  text: string,
  pressableText: string
  onPress?: () => void
}

export const CardHome = ({ text, pressableText, onPress }: Props) => {
  const dimensions = useWindowDimensions()
  return (
    <View style={[styles.root, { width: dimensions.width * 0.85, height: dimensions.height * 0.3 }]}>
      <Image style={styles.plantImage}source={plant} />
      <Image style={[styles.plantImage, { right: 0, transform: [{rotate: '75deg'}] }]}source={plant} />
      <Text> { text }</Text>

      <Pressable onPress={onPress} style={ [styles.pressable, { width: dimensions.width * 0.80 }]}>
        <Text style={styles.pressableText}> { pressableText } </Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  root: {
    position: 'relative',
    borderRadius: 12,
    marginVertical: 10,
    marginHorizontal: '7.5%',
    flexDirection:'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    
    elevation: 7,
  },
  headerText: {},
  pressable: { 
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginHorizontal: 10,
    height: 45,
    backgroundColor: colors.lightGreen,
    borderRadius: 12,
    bottom: 0
  },
  pressableText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  plantImage: {
    width: 35,
    height: 40,
    position: 'absolute',
    top: 5
  }
})
