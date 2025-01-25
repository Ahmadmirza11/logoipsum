import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CommonButton from '../../component/button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {OtpInput} from 'react-native-otp-entry';

const Myotp = ({route}) => {
  const navigation = useNavigation();
  const {fullName, phoneNumber, email, password, imageUrl} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Icon name="arrow-back" size={29} />
      </View>

      <Text style={styles.helo}>Enter Vatification Code</Text>
      
      <Text style={styles.hi}>
        Enter the 4-digit code we sent to your phone number or email address.
      </Text>
      <View style={styles.input}>
        <OtpInput
          numberOfDigits={4}
          focusColor="black"
          type="numeric"
          focusStickBlinkingDuration={500}
          theme={{
            containerStyle: styles.otpContainer,
            pinCodeContainerStyle: styles.pinCodeContainer,
          }}
        />
      </View>
      <Text style={styles.center1}>Resend Code</Text>
      <View style={styles.center}>
        <CommonButton
          title={'Send verification code'}
          containerStyle={styles.btn}
          onPress={() => navigation.navigate('Tabs')}
        />
      </View>
    </View>
  );
};

export default Myotp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5), // Use wp for responsive padding
  },
  back: {
    top: hp(3), // Adjust top position based on height percentage
  },
  helo: {
    top: hp(5), // Adjust top margin with hp
    fontSize: wp(8), // Adjust font size with wp
    fontWeight: '600',
  },
  hi: {
    marginTop: hp(6), // Margin top adjusted with hp
    width: wp(90), // Width adjusted with wp (80% of screen width)
    fontSize: wp(5), // Font size adjusted with wp
  },
  input: {
    marginTop: hp(3), // Margin top adjusted with hp
  },
  inputLabel: {
    fontSize: wp(4.5), // Font size adjusted with wp
    paddingBottom: hp(1), // Padding adjusted with hp
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
    bottom: hp(4), // Bottom margin adjusted with hp
    width: '100%',
    left: wp(5), // Left margin adjusted with wp
    alignItems: 'center',
  },
  center1: {
    textAlign: 'center',
    color:"#739877",
    fontSize:17,
    
  },
  btn: {
    width: wp(90), // Width adjusted to 90% of the screen width
  },
});
