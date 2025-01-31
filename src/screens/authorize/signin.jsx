import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CommonTextInput from '../../component/textinput';
import Icon from 'react-native-vector-icons/Ionicons';
import CommonButton from '../../component/button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Import navigation

const SignIn = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [image, setImage] = useState('');
  const navigation = useNavigation(); // Initialize navigation

  // Function to send OTP
  const codesend = async phone => {
    try {
      const response = await axios.post('https://api.loctour.com/api/users/send-code', {
        phone,
        type: 'register',
      });
      console.log('OTP Response:', response.data);
      return response.data; // ✅ Return the OTP response
    } catch (error) {
      console.error('Error sending OTP:', error.response?.data || error.message);
    }
  };

  // Function to open image picker
  const openImagePicker = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        maxWidth: 100,
        maxHeight: 100,
        includeBase64: true,
      },
      response => {
        if (!response.didCancel && response.assets?.length > 0) {
          const selectedAsset = response.assets[0];
          setSelectedImage({
            uri: selectedAsset.uri,
            name: selectedAsset.fileName,
            type: selectedAsset.type,
          });
        }
      }
    );
  };

  // Function to handle form submission
  const handleFormSubmit = async values => {
    if (!selectedImage) {
      console.log('No image selected');
      return;
    }

    try {
      // Upload image
      const formData = new FormData();
      formData.append('image', {
        uri: selectedImage.uri,
        name: selectedImage.name,
        type: selectedImage.type,
      });

      const imageResponse = await axios.post('https://api.loctour.com/api/image/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Image Upload suc:', imageResponse.data);
      setImage(imageResponse.data.image);
      if (imageResponse.data?.image) {
        const otpResponse = await codesend(values.phone); // Get OTP response

        // Navigate to the next screen with collected data
        navigation.navigate('otpFunction', {
          name: values.name,
          username: values.username,
          email: values.email,
          phone: values.phone,
          image: image // Uploaded image URL
        // OTP code
        });
      }
    } catch (error) {
      console.error('Error during submission:', error.response?.data || error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
    <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.back}>
            <Icon name="arrow-back" size={29} />
          </View>

          <Text style={styles.helo}>Welcome Back 👋🏼</Text>

          <TouchableOpacity style={styles.imagePicker} onPress={openImagePicker}>
            {selectedImage ? (
              <Image source={{ uri: selectedImage.uri }} style={styles.imagePreview} />
            ) : (
              <Image source={require('../../images/picker.png')} style={styles.imagePickerIcon} />
            )}
          </TouchableOpacity>

          <Formik
            initialValues={{ name: '', username: '', email: '', phone: '' }}
            validationSchema={Yup.object({
              name: Yup.string().min(3, 'Minimum 3 characters').required('Full name required'),
              username: Yup.string().min(3, 'Minimum 3 characters').required('Username required'),
              email: Yup.string().email('Invalid email').required('Email required'),
              phone: Yup.string().required('Phone number required'),
            })}
            onSubmit={handleFormSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Full Name</Text>
                  <CommonTextInput
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                  {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Username</Text>
                  <CommonTextInput
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                  />
                  {touched.username && errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Email</Text>
                  <CommonTextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                </View>

                <View style={styles.input}>
                  <Text style={styles.inputLabel}>Phone Number</Text>
                  <CommonTextInput
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    keyboardType="numeric"
                  />
                  {touched.phone && errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
                </View>

                <View style={styles.center}>
                  <CommonButton title={'Sign in'} containerStyle={styles.btn} onPress={handleSubmit} />
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
    marginTop: hp(7),
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
  errorText: {
    color: 'red',
    fontSize: wp(2.5),
  },
});
