import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-elements/dist/image/Image';
import { colors } from '../../lib/colors';

interface Props{
  google: Boolean
}
export const GoogleButton = ({ google}: Props ) => {
  return (
    <View style={styles.container}>
      <Pressable 
        style={styles.button}
        onPress={() => console.log("Login with google")}>
        <Image 
        style={styles.googleIcon}
        source={ google ? require('../../assets/google-icon.png') : require('../../assets/fb-icon.png')}/>  
        <Text style={styles.text}>
         Continuar con google
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingVertical: 2.5,
    margin: 5
  },
  button:{
    width: 214,
    height: 45,
    borderRadius: 13.7,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor: colors.white,
    shadowColor: "#000",
    elevation: 5,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,

  },
  text:{
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: "#000000"
  },
  googleIcon:{
    width: 35,
    height: 35
  }
})
