import React from 'react'
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'

interface Props {
  onPress?: any,
  text: string,
  color: string
  backgroundColor: string,
  containerStyle: ViewStyle
}
export const CustomButton = ({
  text,
  backgroundColor,
  color,
  containerStyle,
  onPress
}: Props) => {
  return (
    <View style={containerStyle}>
      <Pressable 
        style={[styles.button, { backgroundColor: backgroundColor}]}
        onPress={onPress}>
        <Text style={[styles.text, {color: color}]}>
          {text}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    width: 214,
    height: 45,
    borderRadius: 13.7,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
