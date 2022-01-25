import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { AuthStyles } from '../../lib/themes/Authentication';
import { CustomInput } from '../Authentication/Inputs/CustomInput';
import { CustomButton } from '../Button/CustomButton';
import { colors } from '../../lib/colors'

interface Props { navigation: any }

export const RequestResetComponent = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.headerText}>No te preocupes!</Text>
          <Text style={styles.headerText}>Recuperaremos tu contraseña</Text>
          <Text style={styles.headerSubtitle}>Ingresa el email asociado a tu cuenta y te enviaremos un email con las instrucciones para recuperar tu contraseña</Text>
        </View>


        <View style={styles.inputContainer}>
          <CustomInput 
          placeholder="tuemail@email.com" 
          complete={false}
          keyboardType='email-address'
          />

          <CustomButton 
          onPress={() => navigation.navigate('CheckEmail')}
          containerStyle={AuthStyles.buttonContainer} 
          text='Recuperar'
          color='white'
          backgroundColor={colors.lightGreen} />
        </View>
      </View>
    </>
  )
};


const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 40
  },
  headerText: {
    fontSize: 22,
    color: colors.dark,
    fontWeight: '900',
    textAlign: 'left'
  },
  headerSubtitle: {
    fontSize: 15,
    color: colors.dark,
    fontWeight: '500',
    textAlign: 'left',
    marginTop: 15
  },
  inputContainer: {
    marginVertical: 35, 
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})