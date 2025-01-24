import { Image, StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you have this library installed or use any other icon library
import { useNavigation } from '@react-navigation/native';
import UserCardWithModal from '../../component/user';

const Pakages = () => {
  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
      {/* Single Cross Icon */}
      <TouchableOpacity style={styles.crossIcon} onPress={()=>navigation.goBack()}>
        <Icon name="close" size={24} color="white" />
      </TouchableOpacity>

      {/* Swiper Component */}
      <View style={styles.swiperContainer}>
        <Swiper
          style={styles.wrapper}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          autoplay={true} // Optional: Auto-swiping feature
          autoplayTimeout={3} // Interval between auto-swipes
        >
          {/* First Slide */}
          <View style={styles.slide}>
            <Image source={require('../../images/w1.jpg')} style={styles.img} />
          </View>

          {/* Second Slide */}
          <View style={styles.slide}>
            <Image source={require('../../images/w2.jpg')} style={styles.img} />
          </View>

          {/* Third Slide */}
          <View style={styles.slide}>
            <Image source={require('../../images/w3.jpg')} style={styles.img} />
          </View>
        </Swiper>
      </View>

      {/* SWIPER IS CLOSED FROM HERE */}

      <View style={styles.masmak}>
        <Text style={styles.bold}>Al Masmak Palace Museum</Text>
        <View style={styles.km}>
          <Text>Category: Museum</Text>
          <Text> 4 km away</Text>
        </View>
      </View>

      <View style={styles.containe}>
        <Icon
          name="location-sharp"
          size={24}
          color="grey"
          style={styles.locationIcon}
        />
        <View style={styles.locationContainer}>
          <Text style={styles.upperText}>
            6937 Al Thumairi St, 6937، 3153, Riyadh{' '}
          </Text>
          <Text style={styles.lowerText}>12634, Saudi Arabia</Text>
        </View>
      </View>

      {/* User Card With Modal */}
      <UserCardWithModal />

      {/* Fixed Buttons at the Bottom */}
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate("checkin")}>
          <Text style={styles.buttonText}> Check in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Action 2')}>
          <Text style={styles.buttonText}> Direction</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pakages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 31,
    backgroundColor: '#f8f8f8', // Optional: Background color for the container
  },
  swiperContainer: {
    height: 200, // Explicit height for the Swiper container
  },
  wrapper: {},
  slide: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    // Ensure images cover the entire slide
  },
  crossIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better visibility
    borderRadius: 15,
    padding: 5,
    zIndex: 10, // Ensures the icon is above everything
  },
  dot: {
    backgroundColor: 'rgba(150, 29, 29, 0.5)', // Dots with semi-transparent white
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'white', // Active dot with solid white
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  masmak: {
    margin: 20,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    borderBottomColor: '#E5D8CF',
  },
  bold: {
    fontSize: 24,
    fontWeight: '600',
  },
  km: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },

  containe: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 11,
    borderBottomWidth: 0.5,
    paddingBottom: 11,
    borderBottomColor: '#E5D8CF',
  },

  locationContainer: {
    flexDirection: 'column',
  },
  locationIcon: {
    marginRight: 10,
  },
  upperText: {
    fontSize: 16,
    fontWeight: '400',
  },
  lowerText: {
    fontSize: 16,
  },

  // New Styles for the Fixed Bottom Buttons
  bottomButtonsContainer: {
    position: 'absolute',
    bottom: 30, // Distance from the bottom of the screen
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 5, 
    backgroundColor:"white",
    padding:20
  },
  button: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
    borderRadius:22,
    

  },
  button1: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
    borderRadius:22
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
