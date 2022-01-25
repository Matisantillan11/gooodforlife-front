import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const AuthStyles = StyleSheet.create({
  root: {
    flex:1,
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 250,
    marginBottom: 20
  },
  image: {
    flex: 1
  },
  forgot:{
    color: colors.lightGreen,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 30,
    marginBottom: 25,
    alignSelf: 'flex-start'
  },
  buttonContainer:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingVertical: 2.5,
    marginVertical: 15
  },
  dontAccountContainer:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dontAccount:{
    marginVertical: 10,
    fontSize: 16,
    fontWeight:'500',
    alignItems: 'center'
  },
  registerText:{
    color: colors.lightGreen,
    fontSize: 16,
    fontWeight:'700'
  },
  line:{
    height: 1,
    width: '80%',
    backgroundColor: colors.gray,
    marginBottom: 20
  }
})
