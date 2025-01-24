import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Explordata from '../../component/explordata';

const Explor = () => {
  // Array to define the tabs, can be dynamic based on data
  const tabs = ['Foods', 'Entertainment', 'Sports', 'Match', 'cars'];

  return (
    <SafeAreaView>
      <View style={styles.Row}>
        {tabs.map((tab, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.text}>{tab}</Text>
          </View>
        ))}
      </View>
      <ScrollView style={styles.list}>
        <Explordata />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explor;

const styles = StyleSheet.create({
  Row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10, // Adds spacing from the top
  },
  box: {
    width: 'auto',
    paddingHorizontal: 9,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    height: 38,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontWeight: '500',
  },
  list: {
    marginTop:33
  }
});
