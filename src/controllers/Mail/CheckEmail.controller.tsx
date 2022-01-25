import React, { useMemo } from "react";
import { CheckEmailComponent } from "../../components/Mail/CheckEmail.component";

interface Props{
  navigation: any,
  route: any
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
