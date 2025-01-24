import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default function CommonButton({ onPress={}, title, buttonText2Style,containerStyle }) {
  return (
    <TouchableOpacity style={[styles.button,containerStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, buttonText2Style]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#739877',
    paddingVertical:6,
  
    borderRadius: 10,
    alignItems: 'center',
    margin:heightPercentageToDP(1)
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    padding:heightPercentageToDP(0.7)
  },
});
