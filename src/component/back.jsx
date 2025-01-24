import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Back = ({ title }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.editprofile}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={32} color="black" />
        </TouchableOpacity>
        <Text style={styles.edit}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Back;

const styles = StyleSheet.create({
  editprofile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  edit: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingLeft: 16,
    paddingRight: 16,
  },
  container: {
    paddingTop: 26,
  },
});
