import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Back from '../../component/back';
const Help = () => {
  return (
    <View style={styles.container}>
      <Back title={'Help & Support'} />
      <View style={styles.setting}>
      
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('')}>
          <Image source={require('../../images/rofile.png')} />
          <Text style={styles.text}>Account Help</Text>
          {/* <Text style={{marginLeft: 8, color: '#888'}}></Text> */}
          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('')}>
          <Image source={require('../../images/Shield.png')} />
          <Text style={styles.text}>Privacy & Safty</Text>
          {/* <Text style={{marginLeft: 8, color: '#888'}}>34</Text> */}
          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('')}>
          <Image source={require('../../images/phone.png')} />
          <Text style={styles.text}>Using The App</Text>
          {/* <Text style={{marginLeft: 8, color: '#888'}}>3</Text> */}
          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('')}>
          <Image source={require('../../images/Document.png')} />
          <Text style={styles.text}>Content Moderation</Text>
          {/* <Text style={{marginLeft: 8, color: '#888'}}>3</Text> */}
          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('')}>
          <Image source={require('../../images/Headphone.png')} />
          <Text style={styles.text}>Techanical Support</Text>
          {/* <Text style={{marginLeft: 8, color: '#888'}}>3</Text> */}
          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('')}>
          <Image source={require('../../images/block.png')} />
          <Text style={styles.text}>Feedback</Text>
          {/* <Text style={{marginLeft: 8, color: '#888'}}>3</Text> */}
          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Help;

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
