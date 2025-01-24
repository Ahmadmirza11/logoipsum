import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Back from '../../component/back';

const receivedUsers = [
  {
    name: 'Sheikh Abdul Rehman',
    mutualFriends: '5 mutual friends',
    date: '2d ago',
    image: require('../../images/profile.png'),
  },
  {
    name: 'Ralph Edwards',
    mutualFriends: '5 mutual friends',
    date: '2d ago',
    image: require('../../images/profile.png'),
  },
  {
    name: 'Ralph Edwards',
    mutualFriends: '5 mutual friends',
    date: '2d ago',
    image: require('../../images/profile.png'),
  },
  {
    name: 'Ralph Edwards',
    mutualFriends: '5 mutual friends',
    date: '2d ago',
    image: require('../../images/profile.png'),
  },
  {
    name: 'Ralph Edwards',
    mutualFriends: '5 mutual friends',
    date: '2d ago',
    image: require('../../images/profile.png'),
  },
];

const sentUsers = [
  {
    name: 'Leslie Alexander',
    mutualFriends: '5 mutual friends',
    date: '2d ago',
    image: require('../../images/profile.png'),
  },
  {
    name: 'Savannah Nguyen',
    mutualFriends: '5 mutual friends',
    date: '2d ago',
    image: require('../../images/profile.png'),
  },
];

const Friendrequest = () => {
  const [activeTab, setActiveTab] = useState('Received');

  const data = activeTab === 'Received' ? receivedUsers : sentUsers;

  return (
    <View style={styles.container}>
      <Back title={'Friend Requests'} />

      {/* Tab Text */}
      <View style={styles.textTabs}>
        <Text
          style={[
            styles.tabText,
            activeTab === 'Received' && styles.activeTabText,
          ]}
          onPress={() => setActiveTab('Received')}>
          Received ({receivedUsers.length})
        </Text>
        <Text
          style={[
            styles.tabText,
            activeTab === 'Sent' && styles.activeTabText,
          ]}
          onPress={() => setActiveTab('Sent')}>
          Sent ({sentUsers.length})
        </Text>
      </View>

      {/* Friend Requests List */}
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.userRow}>
            {/* Left Section: User Info */}
            <View style={styles.userInfo}>
              <Image source={item.image} style={styles.userImage} />
              <View>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userDetails}>{item.mutualFriends}</Text>
                <Text style={styles.userDetails}>{item.date}</Text>
              </View>
            </View>

            {/* Right Section: Buttons */}
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.tickButton}>
                <Image
                  source={require('../../images/cross.png')}
                  style={styles.tickImage}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.crossButton}>
                <Image
                  source={require('../../images/tick.png')}
                  style={styles.crossImage}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Friendrequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  textTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tabText: {
    fontSize: 16,
    color: '#666',
    marginHorizontal: 20,
  },
  activeTabText: {
    color: '#007BFF',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userDetails: {
    fontSize: 12,
    color: '#666',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 80,
  },
  crossImage: {
    width: 35,
    height: 35,
  },
  tickImage: {
    width: 35,
    height: 35,
  },
});
