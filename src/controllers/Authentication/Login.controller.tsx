import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { LoginComponent } from '../../components/Authentication/Login.component'

interface Props {
  navigation: any
}
export const LoginController = (props: Props) => {
  return (
    <LoginComponent {...props} />
  )
}
