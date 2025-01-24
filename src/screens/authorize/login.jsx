import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonTextInput from '../../component/textinput';
import Icon from 'react-native-vector-icons/Ionicons';
import CommonButton from '../../component/button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Icon name="arrow-back" size={29} />
      </View>

      <Text style={styles.helo}>Hey there 👋🏼</Text>
      <Text style={styles.hi}>
        Enter your phone number to sign in. We will send you a verification
        code.
      </Text>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Phone Number</Text>
        <CommonTextInput />
      </View>
      <View style={styles.center}>
        <CommonButton
          title={'Send verification code'}
          containerStyle={styles.btn}
          onPress={()=>navigation.navigate("otpFunction")}
        />
      </View>
    </View>
  );
};

export default Login;

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
    fontSize: wp(9), // Adjust font size with wp
    fontWeight: '900',
  },
  hi: {
    marginTop: hp(6), // Margin top adjusted with hp
    width: wp(80), // Width adjusted with wp (80% of screen width)
    fontSize: wp(5), // Font size adjusted with wp
  },
  input: {
    marginTop: hp(3), // Margin top adjusted with hp
  },
  inputLabel: {
    fontSize: wp(4.5), // Font size adjusted with wp
    paddingBottom: hp(1), // Padding adjusted with hp
  },
  center: {
    position: 'absolute',
    bottom: hp(4), // Bottom margin adjusted with hp
    width: '100%',
    left: wp(5), // Left margin adjusted with wp
    alignItems: 'center',
  },
  btn: {
    width: wp(90), // Width adjusted to 90% of the screen width
  },
});
