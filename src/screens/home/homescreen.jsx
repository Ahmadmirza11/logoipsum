import {StyleSheet, View, ImageBackground, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library
import Icons from 'react-native-vector-icons/AntDesign'; // Import the icon library
import {useNavigation} from '@react-navigation/native';
import CommonButton from '../../component/button';

const Homescreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../images/map.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate('search')}>
          <View style={styles.iconContainer}>
            <Icon name="search" size={20} color="black" style={styles.icon} />
            <Text style={styles.input}>Search here</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.box}>
        {/* Header Section with Share and Close Icons */}
        <View style={styles.boxHeader}>
          <Text style={styles.headerTitle}>Al Masmak Palace Museum</Text>
          <View style={{flex: 1}} />
          <Icons
            name="sharealt"
            size={25}
            color="black"
            style={styles.iconAction}
          />
          <Icon
            name="close-outline"
            size={29}
            color="black"
            style={styles.iconAction}
          />
        </View>

        {/* Content Section */}
        <View style={styles.boxContent}>
          <Text style={styles.address}>6937 Al Thumairi St, 6937, 3153</Text>
          <Text style={styles.address}>Riyadh 12634, Saudi Arabia</Text>
          <View style={styles.row}>
            <Icon name="location" size={24} color="black" style={styles.icon} />
            <Text style={styles.checkIn}>Check-in (44)</Text>
          </View>
        </View>
        <CommonButton title={'Promote Business'} onPress={()=>navigation.navigate("Selectpakage")}/>
      </View>
    </ImageBackground>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire screen
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the top of the screen
    alignItems: 'center', // Center items horizontally
    marginTop: 50, // Adjust top margin as needed
  },
  iconContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  icon: {
    marginRight: 5,
    paddingLeft: 1, // Adjust spacing between icon and input as needed
  },
  input: {
    flex: 1,
    height: 42,
    color: 'black',
    paddingTop: 10,
  },
  box: {
    position: 'absolute',
    bottom: '10%', // Move box to the center-bottom of the screen
    alignSelf: 'center', // Center horizontally
    width: '90%',
    bottom: 8, // Move box to the bottom of the screen
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  boxHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
  },
  iconAction: {
    marginLeft: 10,
  },
  boxContent: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    color: '#666',
  },
  checkIn: {
    fontSize: 14,
    color: '#050506', // Blue color
  },
  promoteBusiness: {
    fontSize: 14,
    color: '#28a745', // Green color
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 10,
    backgroundColor: '#e5d4b3',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 5,
  },
});
