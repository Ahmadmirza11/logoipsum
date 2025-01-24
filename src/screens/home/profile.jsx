import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import Timemage from '../../component/timemage';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.icons}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Editprofile')}>
            <Image source={require('../../images/Edit.png')} style={styles.iconImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}  onPress={() => navigation.navigate('Setting')}>
            <Icon name="setting" size={22} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileInfo}>
          <Image source={require('../../images/profile.png')} style={styles.profileImage} />
          <View style={styles.profileText}>
            <Text style={styles.profileName}>Sheikh Abdul Rehman</Text>
            <Text style={styles.profileRole}>UI UX Designer</Text>
          </View>
        </View>
        <View style={styles.location}>
          <Icons name="location-pin" size={22} color="gray" />
          <Text style={styles.locationText}>Riyadh, Saudi Arabia</Text>
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.row}>
        {['Friends', 'Followers', 'Following'].map((item, index) => (
          <View key={index} style={styles.statItem}>
            <Text style={styles.statValue}>46 </Text>
            <Text style={styles.statLabel}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.statsContainer}>
        <TouchableOpacity  style={styles.row2} onPress={()=>navigation.navigate("Friendlist")}>
        <View>
          <View style={styles.row2Header}>
            <Text style={styles.row2Text}>Check ins</Text>
            <Icons name="location" size={18} color="skyblue" />
          </View>
          <Text style={styles.row2Value}>999</Text>
        </View>
        </TouchableOpacity>
       
        <View style={styles.row2}>
          <View style={styles.row2Header}>
            <Text style={styles.row2Text}>Score</Text>
            <Image source={require('../../images/King.png')} style={styles.row2Icon} />
          </View>
          <Text style={styles.row2Value}>44</Text>
        </View>
      </View>

      <Timemage />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  iconImage: {
    width: 25,
    height: 25,
  },
  profileSection: {
    marginTop: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginTop: 16,
  },
  profileText: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  profileRole: {
    fontSize: 16,
    color: 'gray',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  locationText: {
    fontSize: 16,
    marginLeft: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  statItem: {
    flexDirection: 'row',
  },
  statValue: {
    fontWeight: '800',
    fontSize: 17,
  },
  statLabel: {
    fontSize: 17,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  row2: {
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: '#e5e5e5',
    width: '46%',
    height: 70,
    padding: 10,
    borderRadius: 10,
  },
  row2Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row2Text: {
    fontWeight: '400',
    fontSize: 17,
  },
  row2Icon: {
    width: 25,
    height: 25,
  },
  row2Value: {
    fontWeight: '700',
    fontSize: 17,
    marginTop: 9,
  },
});
