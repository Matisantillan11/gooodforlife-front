import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {CustomInput} from './Inputs/CustomInput';
import {CustomButton} from '../Button/CustomButton';
import {colors} from '../../lib/colors';
import {GoogleButton} from '../Button/GoogleButton';
import {AuthStyles} from '../../lib/themes/Authentication';
import {Category} from '../../interfaces/interfaces';

//images

interface Props {
  navigation: NavigationProp<ParamListBase>;
  login: () => void;
  loading: string;
  result: Category[];
}

export const LoginComponent = ({navigation, login, loading, result}: Props) => {
  const dimensions = useWindowDimensions();
  return (
    <>
      {loading === 'fetching' ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView style={AuthStyles.root}>
          <Text>{JSON.stringify(result)}</Text>
          <View style={AuthStyles.container}>
            <View
              style={[AuthStyles.imageContainer, {width: dimensions.width}]}>
              <ImageBackground
                style={[AuthStyles.image, {width: dimensions.width}]}
                source={require('../../assets/LoginFrame.png')}
              />
            </View>

            <CustomInput
              placeholder="example@email.com"
              complete={false}
              keyboardType="email-address"
            />
            <CustomInput
              placeholder="*********"
              complete={false}
              secureTextEntry={true}
            />
            <Pressable
              style={{alignSelf: 'flex-start'}}
              onPress={() => navigation.navigate('RequestReset')}>
              <Text style={AuthStyles.forgot}>¿Olvidaste tu contraseña?</Text>
            </Pressable>

            <CustomButton
              text="Ingresar"
              backgroundColor={colors.lightGreen}
              color={colors.white}
              containerStyle={AuthStyles.buttonContainer}
              onPress={login}
            />

            <View style={AuthStyles.dontAccountContainer}>
              <Text style={AuthStyles.dontAccount}>
                ¿Aún no tienes cuenta?{' '}
              </Text>
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
