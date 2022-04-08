import React from 'react';
import {ImageBackground, ImageProps, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {colors} from '../../lib/colors';

interface Props {
  image: ImageProps;
  text: string;
  color?: string;
  alignText?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const CustomHeader = ({image, text, color, alignText}: Props) => {
  const dimensions = useWindowDimensions();
  return (
    <ImageBackground
      style={[styles.background, {width: dimensions.width, height: dimensions.height * 0.3}]}
      source={image}>
      <View style={[styles.root, {width: dimensions.width}]}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, {color: color || colors.white, textAlign: alignText}]}>{text}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(71, 53, 53, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    marginBottom: 0,
  },
  textContainer: {
    width: '70%',
    left: 0,
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
  },
});
