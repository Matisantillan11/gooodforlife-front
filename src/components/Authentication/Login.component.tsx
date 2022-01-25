import React from 'react'
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { CustomInput } from './Inputs/CustomInput';
import { CustomButton } from '../Button/CustomButton';
import { colors } from '../../lib/colors';
import { GoogleButton } from '../Button/GoogleButton';
import { AuthStyles } from '../../lib/themes/Authentication';

//images

interface Props{
  navigation: any
}

export const LoginComponent = ({ navigation }: Props) => {
  const dimensions = useWindowDimensions()
  return (
    <ScrollView style={AuthStyles.root}>
      <View style={AuthStyles.container}>
        <View style={[
            AuthStyles.imageContainer,
            {width: dimensions.width,}
          ]}>
          <ImageBackground style={[
            AuthStyles.image, 
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
        <Pressable style={{ alignSelf: 'flex-start'}} onPress={() => navigation.navigate('RequestReset')}><Text style={AuthStyles.forgot}>¿Olvidaste tu contraseña?</Text></Pressable>

        <CustomButton text='Ingresar' backgroundColor={colors.lightGreen} color={colors.white} containerStyle={AuthStyles.buttonContainer}/>
          
        <View style={AuthStyles.dontAccountContainer}>
          <Text style={AuthStyles.dontAccount}>¿Aún no tienes cuenta? </Text>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={AuthStyles.registerText}>Registrate</Text>
          </Pressable>
        </View>

        <View style={AuthStyles.line} />

        <GoogleButton google={true} />
        <GoogleButton google={false}/>
      </View>
   </ScrollView>
  )
}

