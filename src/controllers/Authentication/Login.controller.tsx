import React, {useContext, useState} from 'react';
import {LoginComponent} from '../../components/Authentication/Login.component';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {AuthContext} from '../../context/store/authentication/authContext';

interface Props {
  navigation: NavigationProp<ParamListBase>;
}
export const LoginController = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, result, status, message} = useContext(AuthContext);

  const loginUser = (email: string, password: string) => {
    if (email !== '' && password !== '') {
      login(email, password);
    }
  };

  return (
    <LoginComponent
      {...props}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      login={loginUser}
      status={status}
      result={result}
    />
  );
};
