import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CommentCard = ({user}) => {
  return (
    <View style={styles.commentCard}>
      {/* User Info */}
      <View style={styles.userInfoContainer}>
        {/* <Image source={user.profileImage} style={styles.userImage} /> */}
        <View style={styles.textInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.locationText}>checked in {user.location}</Text>
          <Text style={styles.timeText}>{user.time}</Text>
        </View>
      </View>

      {/* User Comment */}
      <Text style={styles.commentText}>{user.comment}</Text>

      {/* Display Restaurant Image in the First Comment */}
      {user.restorantImage && (
        <Image source={user.restorantImage} style={styles.restorantImage} />
      )}

      {/* Display Two Images in the Second Comment */}
      {user.id === 2 && user.restorantImages?.length > 1 && (
        <View style={styles.imageRow}>
          {user.restorantImages.map((image, index) => (
            <Image key={index} source={image} style={styles.restorantImage2} />
          ))}
        </View>
      )}

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <TouchableOpacity style={styles.statItem}>
          <Icon name="heart" size={20} color="red" />
          <Text style={styles.statText}>{user.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statItem}>
          <Icon name="chatbubble-outline" size={20} color="gray" />
          <Text style={styles.statText}>{user.comments}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Timeline = () => {
  // Sample data
  const comments = [
    {
      id: 1,
      name: 'Sameer Khan checked in Al Maigliah Market Center',
      //   profileImage: require('../images/profile.png'), // Replace with your image path
      location: 'Al Masmak Palace Museum',
      time: '4h',
      comment: 'I’m really happy to visit this place!',
      restorantImage: require('../images/restorant.png'), // Single restaurant image for the first comment
      likes: 76,
      comments: 2,
    },
    {
      id: 2,
      name: 'Sameer Khan checked in Al Maigliah Market Center',
      //   profileImage: require('../images/profile.png'),
      location: 'Alsafat Square',
      time: '4h',
      comment: 'The pizza is really good.',
      restorantImages: [
        // Array of restaurant images for the second comment
        require('../images/restorant.png'),
        require('../images/restorant.png'),
      ],
      likes: 76,
      comments: 33,
    },
    {
      id: 3,
      name: 'Sameer Khan checked in Al Maigliah Market Center',
      //   profileImage: require('../images/profile.png'), // Replace with your image path
      location: 'Al Maigliah Market Center',
      time: '4h',
      comment: 'The pizza is really good.',
      likes: 746,
      comments: 9,
    },
    {
      id: 5,
      name: 'Sameer Khan checked in Al Maigliah Market Center',
      //   profileImage: require('../images/profile.png'), // Replace with your image path
      location: 'Al Masmak Palace Museum',
      time: '4h',
      comment: 'I’m really happy to visit this place!',
      restorantImage: require('../images/restorant.png'), // Single restaurant image for the first comment
      likes: 76,
      comments: 2,
    },
    {
      id: 4,
      name: 'Sameer Khan checked in Al Maigliah Market Center',
      // profileImage: require('../images/profile.png'), // Replace with your image path
      location: 'Al Maigliah Market Center',
      time: '4h',
      comment: 'The pizza is really good.',
      likes: 276,
      comments: 5,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {comments.map(comment => (
        <CommentCard key={comment.id} user={comment} />
      ))}
    </ScrollView>
  );
};

export default Timeline;

const styles = StyleSheet.create({
  container: {
    padding: 1,
  },
  commentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  locationText: {
    fontSize: 14,
    color: 'gray',
  },
  timeText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 2,
  },
  commentText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 5,
    fontSize: 14,
    color: 'gray',
  },
  restorantImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  restorantImage2: {
    width: '50%',
    height: 100,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
});
