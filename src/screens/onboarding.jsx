import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import CommonButton from '../component/button';

const {width, height} = Dimensions.get('window');

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Skip Button Positioned Absolutely */}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate('Tabs')}
        accessibilityLabel="Skip Onboarding"
        accessibilityRole="button">
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>

      <Swiper
        style={styles.wrapper}
        loop={false}
        paginationStyle={{bottom: 20}}
        activeDotColor="#739877"
        dotStyle={{backgroundColor: 'gray', width: 8, height: 8}}
        activeDotStyle={{width: 10, height: 10}}>
        {/* First Slider */}
        <View style={styles.slide}>
          <Image source={require('../images/one.png')} style={styles.image2} />
          <View style={styles.overlay}>
            <Image
              source={require('../images/iphone11.png')}
              style={styles.backgroundImage}
            />
            <View style={styles.texts}>
              <Text style={styles.heading}>Check-in Anywhere</Text>
              <Text style={styles.status}>
                Easily share your location in real-time with friends.
              </Text>
            </View>
          </View>
        </View>

        {/* Second Slider */}
        <View style={styles.slide}>
          <Image
            source={require('../images/three.png')}
            style={styles.image3}
          />
          <View style={styles.overlay}>
            <Image
              source={require('../images/ii.png')}
              style={styles.backgroundImage}
            />
            <View style={styles.texts}>
              <Text style={styles.heading}>Status Updates</Text>
              <Text style={styles.status}>
                Share updates, photos, or your mood with a creative touch.
              </Text>
            </View>
          </View>
        </View>

        {/* Third Slider */}
        <View style={styles.slide}>
          <View style={styles.overlay}>
            <Image
              source={require('../images/iii.png')}
              style={styles.backgroundImage}
            />
            <View style={styles.texts}>
              <Text style={styles.heading}>Privacy First</Text>
              <Text style={styles.status}>
                Control who sees your updates and manage your preferences
                easily.
              </Text>
            </View>
          </View>
        </View>
      </Swiper>

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        <CommonButton
          title={'Sign In'}
          containerStyle={styles.btn}
          onPress={() => navigation.navigate('login')}
        />
        <CommonButton
          title={'Sign Up'}
          containerStyle={styles.btn2}
          buttonText2Style={{color: 'white'}}
          onPress={() => navigation.navigate('signin')}
        />
      </View>
      <Text style={styles.vendorText}>Sign in as Vendor</Text>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '99%',
    backgroundColor: 'white',
  },
  wrapper: {},
  slide: {
    flex: 1,
    backgroundColor: '#537857',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height * 0.58,
    top: height * 0.12,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  image2: {
    width: width,
    height: height * 0.24,
    position: 'absolute',
    zIndex: 1,
  },
  image3: {
    width: width,
    height: height * 0.53,
    position: 'absolute',
    zIndex: 1,
    top: height * 0.32,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  status: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  texts: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: width,
    height: height * 0.3,
    paddingTop: 42,
    padding: 20,
    alignItems: 'center',
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 20,
    zIndex: 10, // Ensures it stays on top of everything
  },
  skipButtonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  btn: {
    width: '40%',
    height: 50,
    backgroundColor: '#739877',
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    width: '40%',
    height: 50,
    backgroundColor: '#739877',
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vendorText: {
    textAlign: 'center',
    color: '#739877',
    fontSize: 16,
    marginVertical: 10,
  },
});
