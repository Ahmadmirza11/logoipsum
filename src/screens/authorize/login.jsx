import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import CommonTextInput from '../../component/textinput';
import Icon from 'react-native-vector-icons/Ionicons';
import CommonButton from '../../component/button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
const type = 'login';
const Login = () => {
  const navigation = useNavigation();

  const phone = async phone => {
    try {
      const response = await axios.post(
        'https://api.loctour.com/api/users/check-phone',
        {phone},
      );
      console.log('Check Phone Response:', response.data);
      return response.data;
    } catch (error) {
      console.error(
        'Error checking phone:',
        error.response?.data || error.message,
      );
      return null;
    }
  };

  // Function to send OTP
  const codesend = async phone => {
    try {
      const response = await axios.post(
        'https://api.loctour.com/api/users/send-code',
        {
          phone,
          type,
        },
      );
      console.log('OTP Response:', response.data);
      return response.data;
    } catch (error) {
      console.error(
        'Error sending OTP:',
        error.response?.data || error.message,
      );
      Alert.alert('Error', 'Failed to send OTP. Please try again.');
      return null;
    }
  };

  // Validation schema for the form
  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9]{10,15}$/, 'Enter a valid phone number'),
  });

  // Function to handle form submission
  const handleLogin = async values => {
    console.log('Form values:', values);

    const phoneCheck = await phone(values.phone);
    if (!phoneCheck) return;

    const otpResponse = await codesend(values.phone);
    if (!otpResponse) return;

    navigation.navigate('otpFunction', {
      phone: values.phone,
      type,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.back}>
          <Icon
            name="arrow-back"
            size={29}
            onPress={() => navigation.goBack()}
          />
        </View>

        <Text style={styles.helo}>Hey there 👋🏼</Text>
        <Text style={styles.hi}>
          Enter your phone number to sign in. We will send you a verification
          code.
        </Text>

        <Formik
          initialValues={{phone: ''}}
          validationSchema={validationSchema}
          onSubmit={handleLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Phone Number</Text>
                <CommonTextInput
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  keyboardType="phone-pad"
                  placeholder="Enter your phone number"
                  placeholderTextColor={'#ccc'}
                />
                {touched.phone && errors.phone && (
                  <Text style={styles.errorText}>{errors.phone}</Text>
                )}
              </View>
              <View style={styles.center}>
                <CommonButton
                  title={'Send verification code'}
                  containerStyle={styles.btn}
                  onPress={handleSubmit} // handleSubmit now correctly triggers OTP request
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

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
    fontSize: wp(9),
    fontWeight: '900',
  },
  hi: {
    marginTop: hp(6),
    width: wp(80),
    fontSize: wp(5),
  },
  input: {
    marginTop: hp(3),
  },
  inputLabel: {
    fontSize: wp(4.5),
    paddingBottom: hp(1),
  },
  center: {
    position: 'absolute',
    bottom: hp(4),
    width: '100%',
    left: wp(5),
    alignItems: 'center',
  },
  btn: {
    width: wp(90),
  },
  errorText: {
    color: 'red',
    fontSize: wp(3),
  },
});
