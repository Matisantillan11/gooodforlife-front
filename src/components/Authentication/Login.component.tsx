import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {ActivityIndicator, ImageBackground, Pressable, ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {CustomInput} from './Inputs/CustomInput';
import {CustomButton} from '../Button/CustomButton';
import {colors} from '../../lib/colors';
import {GoogleButton} from '../Button/GoogleButton';
import {AuthStyles} from '../../lib/themes/Authentication';
import {Loader} from '../Loader/loader.component';
import {Token, User} from '../../interfaces/interfaces';

//images

interface Props {
  navigation: NavigationProp<ParamListBase>;
  email: string;
  password: string;
  setEmail: (value: string | ((email: string) => string)) => void;
  setPassword: (value: string | ((password: string) => string)) => void;
  login: (email: string, password: string) => void;
  status: 'fetching' | 'fetched' | 'error' | 'initial';
  result: {login: {user: User; token: Token}};
}

export const LoginComponent = ({navigation, login, status, result, email, password, setEmail, setPassword}: Props) => {
  const dimensions = useWindowDimensions();
  return (
    <>
      {status === 'fetched' && result.login.user && result.login.token && navigation.navigate('HomeStack')}
      {status === 'fetching' ? (
        <Loader />
      ) : (
        <ScrollView style={AuthStyles.root}>
          <View style={AuthStyles.container}>
            <View style={[AuthStyles.imageContainer, {width: dimensions.width}]}>
              <ImageBackground
                style={[AuthStyles.image, {width: dimensions.width}]}
                source={require('../../assets/LoginFrame.png')}
              />
            </View>

            <CustomInput
              onChange={value => setEmail(value)}
              placeholder="example@email.com"
              complete={false}
              keyboardType="email-address"
              value={email}
            />
            <CustomInput
              onChange={value => setPassword(value)}
              placeholder="*********"
              complete={false}
              secureTextEntry={true}
              value={password}
            />
            <Pressable style={{alignSelf: 'flex-start'}} onPress={() => navigation.navigate('RequestReset')}>
              <Text style={AuthStyles.forgot}>¿Olvidaste tu contraseña?</Text>
            </Pressable>

            <CustomButton
              text="Ingresar"
              backgroundColor={colors.lightGreen}
              color={colors.white}
              containerStyle={AuthStyles.buttonContainer}
              onPress={() => login(email, password)}
            />

            <View style={AuthStyles.dontAccountContainer}>
              <Text style={AuthStyles.dontAccount}>¿Aún no tienes cuenta? </Text>
              <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={AuthStyles.registerText}>Registrate</Text>
              </Pressable>
            </View>

            <View style={AuthStyles.line} />

            <GoogleButton google={true} />
            <GoogleButton google={false} />
          </View>
        </ScrollView>
      )}
    </>
  );
};
