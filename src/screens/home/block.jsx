import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Back from '../../component/back';

const blockedUsers = [
  {
    name: 'Kathryn Murphy',
    action: 'UnBlock',
    mutualFriends: '5 mutual friends',
    date: '2w ago',
    image: require('../../images/profile.png'), // Replace with the correct image path
  },
  {
    name: 'Savannah Nguyen',
    action: 'UnBlock',
    mutualFriends: '5 mutual friends',
    date: '3w ago',
    image: require('../../images/profile.png'), // Replace with the correct image path
  },
];

const Block = () => {
  return (
    <View style={styles.container}>
      <Back title={'Blocked Users'} />

      <FlatList
        data={blockedUsers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.userRow}>
            {/* User Info with Image */}
            <View style={styles.userInfo}>
              <Image source={item.image} style={styles.userImage} />
              <View style={styles.textInfo}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userDetails}>{item.mutualFriends}</Text>
                <Text style={styles.userDetails}>{item.date}</Text>
              </View>
            </View>

            {/* Action */}
            <TouchableOpacity style={styles.UnBlockButton}>
              <Text style={styles.UnBlockText}>{item.action}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Block;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
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
    flex: 1,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textInfo: {
    flexDirection: 'column',
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userDetails: {
    fontSize: 14,
    color: '#666',
  },
  UnBlockButton: {
    backgroundColor: '#ededed',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  UnBlockText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
