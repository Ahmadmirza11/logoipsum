import React, { useState } from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library for the world icon
const UserCardWithIcon = ({ user }) => {
  const [followStatus, setFollowStatus] = useState(false); // Track follow/unfollow status

  const toggleFollowStatus = () => {
    setFollowStatus(!followStatus);
  };

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
        </View>
      </View>

      {/* Button to toggle Follow/Unfollow */}
      <TouchableOpacity
        style={styles.followButton}
        onPress={toggleFollowStatus}
      >
        <Text style={styles.followButtonText}>
          {followStatus ? 'View' : 'AddFriend'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const UsersList = () => {
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
      source: require('../images/profile.png'),  // Replace with your image path
      location: 'NY',
    },
    {
      id: '3',
      name: 'Mike Johnson',
      source: require('../images/profile.png'),  // Replace with your image path
      location: 'CA',
    },
    {
      id: '4',
      name: 'Sara Lee',
      source: require('../images/profile.png'),  // Replace with your image path
      location: 'LA',
    },
    {
      id: '5',
      name: 'David Wilson',
      source: require('../images/profile.png'),  // Replace with your image path
      location: 'Texas',
    },
    {
      id: '6',
      name: 'Anna Green',
      source: require('../images/profile.png'),  // Replace with your image path
      location: 'Florida',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {/* Render users in a ScrollView */}
      {users.map((user) => (
        <UserCardWithIcon key={user.id} user={user} />
      ))}
    </ScrollView>
  );
};

export default UsersList;

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
    width: 50,
    height: 50,
    borderRadius: 25,
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
  followButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
