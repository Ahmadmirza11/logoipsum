import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SectionList,
  Image,
} from 'react-native';


const notifications = [
  {
    id: 1,
    type: 'follow',
    name: 'Kate Robbins',
    action: 'Started following you',
    time: '2h ago',
    profileImage: require('../../images/profile.png'), // Example profile image
    date: 'Today',
  },
  {
    id: 2,
    type: 'comment',
    name: 'Digby Arnold',
    action: 'Commented: “Where are you go...”',
    time: '2h ago',
    profileImage: require('../../images/profile.png'),
    date: 'Today',
  },
  {
    id: 3,
    type: 'checkin',
    name: 'Ralph Edwards',
    action: 'Checked in at Al Masmak Place',
    time: '12h ago',
    profileImage: require('../../images/profile.png'),
    date: 'Yesterday',
  },
  {
    id: 4,
    type: 'like',
    name: 'James Smith',
    action: 'and 124 others liked your post',
    time: '16h ago',
    profileImage: require('../../images/profile.png'),
    date: 'Yesterday',
  },
  {
    id: 5,
    type: 'like',
    name: 'James Smith',
    action: 'and 124 others liked your post',
    time: '16h ago',
    profileImage: require('../../images/profile.png'),
    date: 'Yesterday',
  },
  {
    id: 6,
    type: 'like',
    name: 'James Smith',
    action: 'and 124 others liked your post',
    time: '16h ago',
    profileImage: require('../../images/profile.png'),
    date: 'Yesterday',
  },
  {
    id: 7,
    type: 'like',
    name: 'James Smith',
    action: 'and 124 others liked your post',
    time: '16h ago',
    profileImage: require('../../images/profile.png'),
    date: 'Yesterday',
  },
];

const Notification = () => {
  const renderNotification = ({item}) => {
    return (
      <View style={[styles.notificationCard, styles[item.type]]}>
        <View style={styles.notificationText}>
          <Image source={item.profileImage} style={styles.profileImage} />
          <View style={styles.notificationDetails}>
            <Text style={styles.notificationTextBold}>
              {item.name} {item.action}
            </Text>
            <Text style={styles.notificationTime}>{item.time}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewButtonText}>
            {item.type === 'follow' ? 'Follow' : 'View'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSectionHeader = ({section}) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  const groupedNotifications = [
    {
      title: 'Today',
      data: notifications.filter(notification => notification.date === 'Today'),
    },
    {
      title: 'Yesterday',
      data: notifications.filter(
        notification => notification.date === 'Yesterday',
      ),
    },
  ];

  return (
    <SectionList
      sections={groupedNotifications}
      keyExtractor={item => item.id.toString()}
      renderItem={renderNotification}
      renderSectionHeader={renderSectionHeader}
      contentContainerStyle={styles.container}
    />
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  notificationCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  notificationText: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  notificationDetails: {
    marginLeft: 10,
    flex: 1,
  },
  notificationTextBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationTime: {
    fontSize: 14,
    color: 'gray',
  },
  viewButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#739877',
    borderRadius: 20,
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
