import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { CustomInput } from './Inputs/CustomInput';
import { CustomButton } from '../Button/CustomButton';
import { colors } from '../../lib/colors';

//images

export const LoginComponent = () => {
  const dimensions = useWindowDimensions()
  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <View style={[
            styles.imageContainer,
            {width: dimensions.width,}
          ]}>
          <ImageBackground style={[
            styles.image, 
            {width: dimensions.width}
          ]} 
          source={require('../../assets/LoginFrame.png')} 
          />
        </View>

        
        <CustomInput 
          placeholder='example@email.com' 
          complete={false} 
          keyboardType='email-address'
        />
        <CustomInput 
          placeholder='example@email.com' 
          complete={false} 
          secureTextEntry={true}
          />
        <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>

        <CustomButton text='Ingresar' backgroundColor={colors.lightGreen} color={colors.white} containerStyle={styles.buttonContainer}/>
      </View>
   </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex:1,
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 250,
    marginBottom: 20
  },
  image: {
    flex: 1
  },
  forgot:{
    color: colors.lightGreen,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 30,
    marginBottom: 25,
    alignSelf: 'flex-start'
  },
  buttonContainer:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingVertical: 2.5,
    margin: 15
  }
})
