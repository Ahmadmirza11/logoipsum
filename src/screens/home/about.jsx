import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Back from '../../component/back';
const About = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Back title={'Help & Support'} />
      <View style={styles.setting}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Account')}>
          <Text style={styles.text}>About Your Account</Text>
          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Policy')}>
          <Text style={styles.text}>Privacy Policy</Text>

          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('Terms')}>
          <Text style={styles.text}>Terms of Use</Text>

          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS === 'android' ? 24 : 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 16,
    color: '#333',
  },

  setting: {
    backgroundColor: 'white',
    borderBottomWidth: 0.2,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    //   borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',

    marginBottom: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    paddingLeft: 16,
  },
});
