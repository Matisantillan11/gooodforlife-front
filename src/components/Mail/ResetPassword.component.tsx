import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../lib/colors';
import { AuthStyles } from '../../lib/themes/Authentication';
import { CustomButton } from '../Button/CustomButton';
import { CustomInput } from '../Authentication/Inputs/CustomInput';

interface Props { navigation: any }

export const ResetPasswordComponent = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Crea tu nueva contraseña</Text>
          <Text style={styles.headerSubtitle}>Tu nueva contraseña debe ser obligatoriamente diferente a la anterior</Text>
        </View>


        <View style={styles.inputContainer}>
          <CustomInput
          placeholder="**********" 
          complete={false}
          keyboardType='default'
          secureTextEntry={true}
          />

          <CustomInput
          placeholder="**********" 
          complete={false}
          keyboardType='default'
          secureTextEntry={true}
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
    paddingTop: 50,
    paddingHorizontal: 35,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginVertical: 40
  },
  headerText: {
    fontSize: 22,
    color: colors.dark,
    fontWeight: '900',
    textAlign: 'left'
  },
  headerSubtitle: {
    width: 300,
    fontSize: 15,
    color: colors.dark,
    fontWeight: '500',
    textAlign: 'left',
    marginTop: 15
  },
  inputContainer: {
    marginVertical: 25,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})