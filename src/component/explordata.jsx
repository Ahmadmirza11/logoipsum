import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library for icons

const UserCardWithIcon = ({user}) => {
  return (
    <View style={styles.userCard}>
      {/* User Image and Name */}
      <View style={styles.userInfo}>
        <Image
          source={user.source} // Dynamic image source
          style={styles.userImage}
        />
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userLocation}>
            {user.location} <Icon name="globe-outline" size={16} color="gray" />
          </Text>
           
           <View style={styles.check}>
          <View style={styles.checkInContainer}>
            <View style={styles.icon}>
            {/* <Icon name="location-outline" size={18} color="gray" /> */}
            <Image style={styles.pin} source={require('../images/Pin.png')} />
            </View>
            <Text style={styles.checkInText}>Check In</Text>
          </View>
            <Text style={styles.checkInText}>45 km Away</Text>
          </View>
         
        </View>
      </View>
      {/* Location Icon and Check-in Text */}
    </View>
  );
};

const Explordata = () => {
  // Sample data for multiple users
  const users = [
    {
      id: '1',
      name: 'John Doe',
      source: require('../images/profile.png'), // Replace with your image path
      location: '4h ago',
    },
    {
      id: '2',
      name: 'Jane Smith',
      source: require('../images/profile.png'), // Replace with your image path
      location: 'NY',
    },
    {
      id: '3',
      name: 'Mike Johnson',
      source: require('../images/profile.png'), // Replace with your image path
      location: 'CA',
    },
    {
      id: '4',
      name: 'Sara Lee',
      source: require('../images/profile.png'), // Replace with your image path
      location: 'LA',
    },
    {
      id: '5',
      name: 'David Wilson',
      source: require('../images/profile.png'), // Replace with your image path
      location: 'Texas',
    },
    {
      id: '6',
      name: 'Anna Green',
      source: require('../images/profile.png'), // Replace with your image path
      location: 'Florida',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {/* Render users in a ScrollView */}
      {users.map(user => (
        <UserCardWithIcon key={user.id} user={user} />
      ))}
    </ScrollView>
  );
};

export default Explordata;

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    marginVertical: 8,
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 60, // Increased width
    height: 60, // Increased height
    borderRadius: 30,
    marginRight: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userLocation: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  checkInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dfc28c',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 5,
    width: 100,
  },
  checkInText: {
    marginLeft: 5,
    color: 'gray',
    fontSize: 14,
  },
  check:{
    flexDirection:"row",
    justifyContent: 'center',
    alignItems:"center",

  },
  icon:{
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  }

});
