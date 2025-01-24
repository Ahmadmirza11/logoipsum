import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Setting = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.editprofile}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={29} color="black" />
        </TouchableOpacity>

        <Text style={styles.edit}>Setting</Text>
      </View>
      <View style={styles.setting}>
        <Text style={styles.title}>Privacy Settings</Text>
        <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate("privacy")}>
          <Image source={require('../../images/rofile.png')} />
          <Text style={styles.text}>Account Privacy</Text>
          <Text style={{marginLeft: 8, color: '#888'}}>Everyone</Text>
          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate("Friendrequest")}>
          <Image source={require('../../images/lock.png')} />
          <Text style={styles.text}>Friend Request</Text>
          <Text style={{marginLeft: 8, color: '#888'}}>34</Text>
          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate("Block")}>
          <Image source={require('../../images/block.png')} />
          <Text style={styles.text}>Blocked User</Text>
          <Text style={{marginLeft: 8, color: '#888'}}>3</Text>
          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>For Professionals</Text>
        <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate("saudule")}>
          <Image source={require('../../images/Clock.png')} />
          <Text style={styles.text}>Schedule Content</Text>
          <Text style={{marginLeft: 8, color: '#888'}}>2</Text>

          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.setting}>
        <Text style={styles.title}>Help & Support</Text>
        <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate("Help")}>
          <Image source={require('../../images/rofile.png')} />
          <Text style={styles.text}>Help & Support</Text>

          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate("About")}>
          <Image source={require('../../images/Shield.png')} />
          <Text style={styles.text}>About</Text>
          <Text style={{marginLeft: 8, color: '#888'}}>34</Text>
          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}  onPress={()=>navigation.navigate("Language")}>
          <Image source={require('../../images/lock.png')} />
          <Text style={styles.text}>Languages</Text>
          <Text style={{marginLeft: 8, color: '#888'}}>3</Text>
          <Icon name="chevron-forward" size={20} color="#333" />
        </TouchableOpacity>
      </View>
      <View>
        <Text>

        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS === 'android' ? 24 : 0,
  },
  editprofile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 16,
  },
  edit: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingLeft: 16,
    paddingRight: 16,
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
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    paddingLeft: 16,
  },
  logout: {
    paddingVertical: 20,
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
    borderTopColor: '#E0E0E0',
  },
});
