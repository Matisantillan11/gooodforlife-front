import React, { useMemo } from "react";
import {NavigationProp, RouteProp, ParamListBase} from '@react-navigation/native';
import { CheckEmailComponent } from "../../components/Mail/CheckEmail.component";
import { RootStackParamList } from '../../navigators/PrincipalStack';

interface Props{
  navigation: NavigationProp<ParamListBase>,
  route: RouteProp<RootStackParamList, "CheckEmail">,
}
export const CheckEmailController = ({
  navigation,
  route
}: Props ) => {
  const params = route.params

  const text = useMemo(()=>{
    if(params?.text){
      return params?.text
    } else{
      return "Te enviamos instrucciones a tu correo para recuperar tu contraseña"
    }
  }, [])
  
  return <CheckEmailComponent text={text} navigation={navigation}/>

};
