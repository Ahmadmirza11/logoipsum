// SignIn.js
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CommonTextInput from '../../component/textinput';
import Icon from 'react-native-vector-icons/Ionicons';
import CommonButton from '../../component/button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

const SignIn = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to store image URI in local storage
  const saveImageToLocalStorage = async uri => {
    try {
      await AsyncStorage.setItem('selectedImage', uri);
      console.log('Image URI saved to local storage:', uri);
    } catch (error) {
      console.error('Failed to save image URI:', error);
    }
  };

  // Function to load image URI from local storage
  const loadImageFromLocalStorage = async () => {
    try {
      const storedImage = await AsyncStorage.getItem('selectedImage');
      if (storedImage) {
        setSelectedImage(storedImage);
        console.log('Image URI loaded from local storage:', storedImage);
      }
    } catch (error) {
      console.error('Failed to load image URI:', error);
    }
  };

  // Load image URI when the component mounts
  useEffect(() => {
    loadImageFromLocalStorage();
  }, []);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      maxWidth: 100,
      maxHeight: 100,
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedAsset = response.assets[0];
        setSelectedImage(selectedAsset.uri);
        saveImageToLocalStorage(selectedAsset.uri);
        console.log('User picked image: ', selectedAsset.uri);
      }
    });
  };

  // Validation Schema
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, 'Full name must be at least 3 characters long')
      .required('Full name is required'),
    phoneNumber: Yup.string()
      .matches(/^\d{11}$/, 'Phone number must be 11 digits')
      .required('Phone number is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required'),
  });

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.back}>
            <Icon name="arrow-back" size={29} />
          </View>

          <Text style={styles.helo}>Welcome Back 👋🏼</Text>

          {/* Image Picker */}
          <TouchableOpacity style={styles.imagePicker} onPress={openImagePicker}>
            {selectedImage ? (
              <View style={styles.imageContainer}>
                <Image source={{uri: selectedImage}} style={styles.imagePreview} />
                <View style={styles.plusIconContainer}>
                  <Icon name="add-circle" size={24} color="green" />
                </View>
              </View>
            ) : (
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../images/picker.png')}
                  style={styles.imagePickerIcon}
                />
                <View style={styles.plusIconContainer}>
                  <Icon name="add-circle" size={24} color="green" />
                </View>
              </View>
            )}
          </TouchableOpacity>

          <Formik
            initialValues={{
              fullName: '',
              phoneNumber: '',
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              console.log('Form Submitted:', values);
              navigation.navigate('otpFunction', {
                fullName: values.fullName,
                phoneNumber: values.phoneNumber,
                email: values.email,
                password: values.password,
                imageUrl: selectedImage,
              });
            }}>
            {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
              <>
                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Full Name</Text>
                  <CommonTextInput
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    value={values.fullName}
                  />
                  {touched.fullName && errors.fullName && (
                    <Text style={styles.errorText}>{errors.fullName}</Text>
                  )}
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Phone Number</Text>
                  <CommonTextInput
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}
                    keyboardType="numeric"
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                  )}
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Email</Text>
                  <CommonTextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Password</Text>
                  <CommonTextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                  />
                  {touched.password && errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>

                <View style={styles.center}>
                  <CommonButton
                    title={'Sign In'}
                    containerStyle={styles.btn}
                    onPress={handleSubmit}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5),
    backgroundColor: 'white',
    height: hp(100),
  },
  back: {
    top: hp(3),
  },
  helo: {
    top: hp(5),
    fontSize: wp(9),
    fontWeight: '900',
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
  imagePicker: {
    marginTop: hp(5),
    marginBottom: hp(2),
  },
  imagePickerIcon: {
    width: wp(20),
    height: wp(20),
  },
  imagePreview: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
  },
  imageContainer: {
    position: 'relative',
    width: wp(20),
    height: wp(20),
  },
  plusIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: wp(5),
    padding: 2,
  },
  errorText: {
    color: 'red',
    fontSize: wp(2.5),
  
  },
});

// // OtpFunction.js
// import React from 'react';
// import {View, Text, Image} from 'react-native';

// const OtpFunction = ({route}) => {
//   const {fullName, phoneNumber, email, password, imageUrl} = route.params;

//   return (
//     <View>
//       <Text>Full Name: {fullName}</Text>
//       <Text>Phone Number: {phoneNumber}</Text>
//       <Text>Email: {email}</Text>
//       <Text>Password: {password}</Text>
//       {imageUrl && <Image source={{uri: imageUrl}} style={{width: 100, height: 100}} />}
//     </View>
//   );
// };

// export default OtpFunction;
