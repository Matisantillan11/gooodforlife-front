import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from '../../lib/colors';
import { CustomButton } from "../Button/CustomButton";
import { AuthStyles } from '../../lib/themes/Authentication';


interface Props {
  text: string,
  navigation: any
}

export const CheckEmailComponent = ({ text, navigation }: Props) => {
  return( 
    <>
      <View style={styles.container}>
        <View style={styles.backgroundEmail}>
          <Icon size={80} name="email" color={colors.darkGreen}/>
        </View>

        <Text style={styles.title}>Chequea tu email</Text>
        <Text style={styles.subtitle}>{ text }</Text>
        <View style={styles.openEmailContainer}>
          <CustomButton onPress={()=> navigation.navigate('ResetPassword')} text="Abrir correo" containerStyle={AuthStyles.buttonContainer} backgroundColor={colors.lightGreen} color={colors.white}/>
          <Text style={styles.nextText}>Continuar, lo haré luego..</Text>
        </View>
      
        <View style={styles.starredContainer}>
          <Text style={styles.starred}>¿No recibiste un correo? Asegurate de chequear tu spam o <Text style={[styles.starred, {color: colors.lightGreen}]}> solicita nuevas instruccines</Text></Text>
        </View>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 25
  },
  backgroundEmail: {
    width: 125,
    height: 125,
    borderRadius: 33.7,
    backgroundColor: 'rgba(146, 198, 78, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 110,
    
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: color.dark,
    textAlign: 'center',
    marginVertical: 25
  },
  subtitle:{
    fontSize: 16,
    fontWeight: '500',
    color: color.dark,
    textAlign: 'center'
  },
  openEmailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 150 
  }, 
  nextText: {
    marginTop: -10,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center'
  },
  starredContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  starred: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center'
  }
})
