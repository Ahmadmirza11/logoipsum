import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Back from '../../component/back';

const languages = [
  { id: '1', country: 'English', capital: 'London' },
  { id: '2', country: 'Afrikaans', capital: 'Pretoria' },
  { id: '3', country: 'Bahasa Indonesia', capital: 'Jakarta' },
  { id: '4', country: 'Indonesian', capital: 'Jakarta' },
  { id: '5', country: 'Bahasa Melayu', capital: 'Kuala Lumpur' },
  { id: '6', country: 'Malay', capital: 'Kuala Lumpur' },
  { id: '7', country: 'Dansk', capital: 'Copenhagen' },
  { id: '8', country: 'Danish', capital: 'Copenhagen' },
  { id: '9', country: 'Deutsch', capital: 'Berlin' },
  { id: '10', country: 'German', capital: 'Berlin' },
  { id: '11', country: 'English (UK)', capital: 'London' },
  { id: '12', country: 'Español', capital: 'Madrid' },
  { id: '13', country: 'Spanish', capital: 'Madrid' },
  { id: '14', country: 'Filipino', capital: 'Manila' },
  { id: '15', country: 'Français (Canada)', capital: 'Ottawa' },
  { id: '16', country: 'French', capital: 'Paris' },
  { id: '17', country: 'Italiano', capital: 'Rome' },
  { id: '18', country: 'Italian', capital: 'Rome' },
  { id: '19', country: 'Suomi', capital: 'Helsinki' },
  { id: '20', country: 'Finnish', capital: 'Helsinki' },
];

const Language = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.languageItem}>
      <Text style={styles.languageText}>{item.country}</Text>
      <Text style={styles.capitalText}>{item.capital}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Back title={'Select Language'} />
      <FlatList
        data={languages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding:16
  },

  languageItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    // backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,

  },
  languageText: {
    fontSize: 16,
    color: '#333',
  },
  capitalText: {
    fontSize: 14,
    color: 'grey',
    marginTop: 5,
  },
});
