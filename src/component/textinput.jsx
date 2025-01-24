import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default function CommonTextInput({ placeholder, value, onChangeText, customStyle, placeholderTextColor, ...rest }) {
  return (
    <TextInput
      style={[styles.input, customStyle]}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: heightPercentageToDP(6.3),
    borderWidth: 1.6,
    borderColor:"#F6C8B1",
    borderRadius: 10,
    backgroundColor:"#ffff",
    color:'black'
  },
});
