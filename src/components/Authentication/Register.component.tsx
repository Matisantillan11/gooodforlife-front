import React from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { CustomInput } from './Inputs/CustomInput';
import { CustomButton } from '../Button/CustomButton';
import { colors } from '../../lib/colors';
import { AuthStyles } from '../../lib/themes/Authentication';


interface Props{
  navigation: any
}
export const RegisterComponent = ({ navigation }: Props ) => {
  const dimensions = useWindowDimensions()
  return (
    <ScrollView style={AuthStyles.root}>
      <View style={AuthStyles.container}>
        <View style={[ styles.headerContainer, {
          marginLeft:  - dimensions.width * 0.15,
          height: dimensions.height * 0.2,
          width: dimensions.width * 0.7,
        }]}>
          <Text style={styles.headerText}> Hola.</Text>
          <Text style={styles.headerText}> Crea tu cuenta</Text>
        </View> 

        <ScrollView style={{ alignContent: 'center'}} showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.buttonContainer}>
              <Text style={styles.label}> Nombre </Text>
              <CustomInput 
                placeholder='Juan Perez' 
                complete={false} 
                keyboardType='default'
              />
            </View> 

            <View style={styles.buttonContainer}>
              <Text style={styles.label}> Correo Electrónico </Text>
              <CustomInput 
                placeholder='example@email.com' 
                complete={false} 
                secureTextEntry={true}
                keyboardType='email-address'
              />
            </View>
            <View style={styles.buttonContainer}>
              <Text style={styles.label}> Contraseña </Text>
              <CustomInput 
                placeholder='*******' 
                complete={false} 
                secureTextEntry={true}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Text style={styles.label}> Repite tu contraseña </Text>
              <CustomInput 
                placeholder='*******' 
                complete={false} 
                secureTextEntry={true}
              />
            </View>

            <CustomButton onPress={() => navigation.navigate('CheckEmail', {text: "Te enviamos instrucciones a tu correo para confirmar tu cuenta"})}text='Registrarme' backgroundColor={colors.lightGreen} color={colors.white} containerStyle={AuthStyles.buttonContainer}/>

            <View style={AuthStyles.dontAccountContainer}>
              <Text style={AuthStyles.dontAccount}>¿Ya tienes cuenta? </Text>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={AuthStyles.registerText}>Inicia Sesión</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>       

      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerText: { color: 'black', fontSize: 26, fontWeight: 'bold', textAlign: 'left'},
  buttonContainer:{
    flex: 1,
    margin: 7.5,
  },
  label:{  
    position: 'absolute',
    marginLeft: 25,
    fontSize: 16,
    marginBottom: -45,
    fontWeight: '500',
    backgroundColor: 'white',
    color: "#333333",
    zIndex: 999999,
  }
})
