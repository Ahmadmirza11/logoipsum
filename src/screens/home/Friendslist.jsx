import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // You can install this icon package using: npm install @expo/vector-icons

const FriendsList = () => {
  const [activeTab, setActiveTab] = useState('follow'); // Manage active tab state
  const [searchQuery, setSearchQuery] = useState(''); // Manage search input

  // Data for friends
  const followData = [
    { id: '1', name: 'Sheikh Abdul Rehman', mutualFriends: 5 },
    { id: '2', name: 'Ralph Edwards', mutualFriends: 3 },
    { id: '3', name: 'Ralph Edwards', mutualFriends: 3 },
    { id: '4', name: 'Ralph Edwards', mutualFriends: 3 },
    { id: '5', name: 'Ralph Edwards', mutualFriends: 3 },
    { id: '6', name: 'Ralph ravxv', mutualFriends: 3 },
    { id: '', name: 'Ralph Edwards', mutualFriends: 3 },
    { id: '7', name: 'Ralph Edwards', mutualFriends: 3 },
    { id: '8', name: 'Ralph Edwards', mutualFriends: 3 },
    { id: '9', name: 'Ralph Edwards', mutualFriends: 3 },
    { id: '10', name: 'Ralph Edwards', mutualFriends: 3 },
    { id: '11', name: 'Ralph Edwards', mutualFriends: 3 },
  ];

  const unfollowData = [
    { id: '3', name: 'Leslie Alexander', mutualFriends: 2 },
    { id: '4', name: 'Savannah Nguyen', mutualFriends: 4 },
  ];

  const followingData = [
    { id: '5', name: 'Jane Cooper', mutualFriends: 7 },
    { id: '6', name: 'Albert Flores', mutualFriends: 6 },
    { id: '7', name: 'Darrell Steward', mutualFriends: 8 },
    { id: '8', name: 'Robert Fox', mutualFriends: 1 },
  ];

  const renderFriendItem = ({ item }) => {
    let buttonText = '';
    let buttonAction = () => {};
    let buttonColor = '#E5D89B'; // Default color

    // Decide which button text and color to show based on the activeTab
    if (activeTab === 'follow') {
      buttonText = 'Unfollow';
  
      buttonColor = '#ecb972'; // Tomato color for "Unfollow"
    } else if (activeTab === 'unfollow') {
      buttonText = 'Follow Back';
     
      buttonColor = '#739877'; // LimeGreen color for "Follow Back"
    } else if (activeTab === 'following') {
      buttonText = 'Unfollow';
    
      buttonColor = '#739877'; // DodgerBlue color for "Unfollow"
    }

    return (
      <View style={styles.friendCard}>
        <View style={styles.friendInfo}>
          <Image
            source={require('../../images/profile.png')} // Placeholder image for the profile
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.friendName}>{item.name}</Text>
            <Text style={styles.mutualFriendsText}>
              {item.mutualFriends} mutual friends
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: buttonColor }]}
          onPress={buttonAction}>
          <Text style={styles.actionButtonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const getActiveData = () => {
    switch (activeTab) {
      case 'follow':
        return followData;
      case 'unfollow':
        return unfollowData;
      case 'following':
        return followingData;
      default:
        return [];
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with Back button and Search */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => alert('Back button pressed')}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search friends"
          placeholderTextColor={"black"}
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>

      {/* Tab Buttons */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'follow' && styles.activeTab]}
          onPress={() => setActiveTab('follow')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'follow' && styles.activeTabText,
            ]}>
            Friends(44)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'unfollow' && styles.activeTab]}
          onPress={() => setActiveTab('unfollow')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'unfollow' && styles.activeTabText,
            ]}>
            Followers(54)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'following' && styles.activeTab]}
          onPress={() => setActiveTab('following')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'following' && styles.activeTabText,
            ]}>
            Following(6)
          </Text>
        </TouchableOpacity>
      </View>

      {/* Friends List */}
      <FlatList
        data={getActiveData()}
        keyExtractor={item => item.id}
        renderItem={renderFriendItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FriendsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    top: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    marginRight: 16,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 8,
    fontSize: 16,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tabButton: {
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#739877',
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTabText: {
    color: '#739877',
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 6,
  },
  friendCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 0.8,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  friendInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    justifyContent: 'center',
  },
  friendName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  mutualFriendsText: {
    fontSize: 14,
    color: 'gray',
  },
  actionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#fff', // Make text color white to contrast with button background
  },
});
