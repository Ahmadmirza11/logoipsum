import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Back from '../../component/back';

const Shadule = () => {
  return (
    <View style={styles.container}>
      <Back title={'Shadule'} />

      {/* Centered Message and Button */}
      <View style={styles.centerContent}>
        <Image style={styles.img} source={require('../../images/info.png')} />
        <Text style={styles.centerText}>
          You haven’t scheduled any content yet
        </Text>
        <Text style={styles.centerText1}>
          You can schedule posts and check in by going to advanced settings when
          creating new content.
        </Text>

        <TouchableOpacity style={styles.scheduleButton}>
          <Text style={styles.scheduleText}>Schedule a Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Shadule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 26,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center', // Vertically centers content
    alignItems: 'center', // Horizontally centers content
  },
  centerText: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '800',
    color: '#666',
    marginBottom: 10,
  },
  img: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  centerText1: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 19,
    color: '#383737',
  },
  scheduleButton: {
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  scheduleText: {
    color: '#739877',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
