import React from 'react';
import {KeyboardTypeOptions, StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../../lib/colors';

interface Props {
  placeholder: string;
  complete: boolean;
  keyboardType?: KeyboardTypeOptions;
  onChange?: (value: string) => void;
  value?: any;
  secureTextEntry?: boolean;
}

export const CustomInput = ({
  placeholder,
  complete,
  keyboardType = 'default',
  onChange,
  secureTextEntry,
  value,
}: Props) => {
  return (
    <View style={style.root}>
      <TextInput
        style={style.input}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        autoCorrect={complete}
        keyboardType={keyboardType}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
        value={value}
      />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    width: 335,
    margin: 15,
  },
  input: {
    width: 329,
    height: 45,
    borderWidth: 1,
    padding: 15,
    borderRadius: 12,
    borderColor: colors.gray,
  },
});
