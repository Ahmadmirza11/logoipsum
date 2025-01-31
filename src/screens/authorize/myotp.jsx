import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CommonButton from '../../component/button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { OtpInput } from 'react-native-otp-entry';
import axios from 'axios';

const Myotp = ({ route }) => {
  const navigation = useNavigation();
  const { name, username, email, phone, image,type} = route.params;
  const [enteredOtp, setEnteredOtp] = useState('');

 const verify = async () => {
    try {
      const response = await axios.post(
        'https://api.loctour.com/api/users/verify-otp/registration',
        {
          phone,
          code: enteredOtp, 
          type
         
        }
      );

      console.log('Verify Response:', response.data);

      // Navigate to the main screen (Tabs) after successful registration
      navigation.navigate('Tabs');
    } catch (error) {
      console.error('Error registering user:', error.response?.data || error.message);
      
    }
  }

 


  // Function to handle user registration
  const register = async () => {
   
    console.log(image)

    try {
      const response = await axios.post(
        'https://api.loctour.com/api/users/signup/customer',
        {
          name,
          username,
          email,
          phone,
          image,
          code: enteredOtp, // Use the entered OTP code
        }
      );

      console.log('Register Response:', response.data);

      // Navigate to the main screen (Tabs) after successful registration
      navigation.navigate('Tabs', { phone });
    } catch (error) {
      console.error('Error registering user:', error.response?.data || error.message);
      Alert.alert('Registration Failed', error.response?.data?.message || 'An error occurred');
    }
  };
  const ahmad=()=>{
  if (type=='login') {
    verify()
  }
  else{register()}}

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Icon name="arrow-back" size={29} onPress={() => navigation.goBack()} />
      </View>

      <Text style={styles.helo}>Enter Verification Code</Text>
      <Text style={styles.hi}>
        Enter the 4-digit code we sent to your phone number or email address.
      </Text>

      <View style={styles.input}>
        <OtpInput
          numberOfDigits={4}
          focusColor="black"
          type="numeric"
          onTextChange={setEnteredOtp} // Capture OTP input
          theme={{
            containerStyle: styles.otpContainer,
            pinCodeContainerStyle: styles.pinCodeContainer,
          }}
        />
      </View>

      <Text style={styles.center1}>Resend Code</Text>

      <View style={styles.center}>
        <CommonButton
          title={'Verify & Register'}
          containerStyle={styles.btn}
          onPress={ahmad} // Call register function on button press
        />
      </View>
    </View>
  );
};

export default Myotp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5),
  },
  back: {
    top: hp(3),
  },
  helo: {
    top: hp(5),
    fontSize: wp(8),
    fontWeight: '600',
  },
  hi: {
    marginTop: hp(6),
    width: wp(90),
    fontSize: wp(5),
  },
  input: {
    marginTop: hp(3),
  },
  otpContainer: {
    padding: 20,
  },
  pinCodeContainer: {
    width: 60,
    height: 60,
  },
  center: {
    position: 'absolute',
    bottom: hp(4),
    width: '100%',
    left: wp(5),
    alignItems: 'center',
  },
  center1: {
    textAlign: 'center',
    color: "#739877",
    fontSize: 17,
  },
  btn: {
    width: wp(90),
  },
});
