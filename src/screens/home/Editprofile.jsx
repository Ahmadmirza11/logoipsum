import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import CommonButton from '../../component/button';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Editprofile = () => {
  const [fullName, setFullName] = useState('Sheikh Abdul Rehman');
  const [phoneNumber, setPhoneNumber] = useState('+966 512345678');
  const [email, setEmail] = useState('abdulsheikh873.@gmail.com');
  const [referralCode, setReferralCode] = useState('');
  const navigation = useNavigation();
  const handleUpdate = () => {
    // Logic for updating profile (e.g., API call)
    console.log('Profile Updated:', {
      fullName,
      phoneNumber,
      email,
      referralCode,
    });
    alert('Profile Updated Successfully!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.editprofile}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={29} color="black" />
        </TouchableOpacity>
        <Text style={styles.edit}>Edit Profile</Text>
      </View>
      <View style={styles.pic}>
        {/* <Icon name="person-circle" size={120} color="grey" /> */}
        <Image source={require('../../images/user.png')} style={styles.picImage} />
       
      </View>

      {/* Full Name */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your full name"
        />
      </View>

      {/* Phone Number */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
      </View>

      {/* Email */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>

      {/* Update Button */}
      <CommonButton title={'update'} onPress={handleUpdate}/>
    </ScrollView>
  );
};

export default Editprofile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  editprofile: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 16,
    // paddingHorizontal: 16,
  },
  edit: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingLeft: 16,
    paddingRight: 16,
    color: '#333',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    marginBottom: 16,
  },
  picImage:{
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom:19
   
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
