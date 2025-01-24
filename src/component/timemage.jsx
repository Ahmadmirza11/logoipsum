import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Timeline from './Timeline';
import { useNavigation } from '@react-navigation/native';

const Timemage = () => {
  const [activeTab, setActiveTab] = useState('timeline'); // Manage active tab state
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Tabs Section */}
      <View style={styles.tabs}>
        <View style={styles.tabButtons}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'timeline' && styles.activeTab]}
            onPress={() => setActiveTab('timeline')}>
            <Text
              style={[styles.tabText, activeTab === 'timeline' && styles.activeTabText]}>
              Timeline
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'images' && styles.activeTab]}
            onPress={() => setActiveTab('images')}>
            <Text
              style={[styles.tabText, activeTab === 'images' && styles.activeTabText]}>
              Images
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.icons}>
          <TouchableOpacity style={styles.iconButton} onPress={()=>navigation.navigate("Editprofile")}>
            <Image
              source={require('../images/Edit.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="setting" size={22} color="gray" />
          </TouchableOpacity>
        </View> */}
      </View>

      {/* Content Section */}
      <ScrollView style={styles.content}>
        {activeTab === 'timeline' ? (
        <View>
            {/* Sample Timelines */}
          <Timeline/>
        </View>
      



        ) : (
          <View style={styles.imageGallery}>
            <Image
              source={require('../images/restorant.png')}
              style={styles.galleryImage}
            />
            <Image
              source={require('../images/restorant.png')}
              style={styles.galleryImage}
            />
            <Image
              source={require('../images/restorant.png')}
              style={styles.galleryImage}
            />
             <Image
              source={require('../images/restorant.png')}
              style={styles.galleryImage}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Timemage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    paddingBottom: 8,
  },
  tabButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
  tabButton: {
    paddingVertical: 10,
    width: '45%',
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
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '30%',
  },
  iconButton: {
    marginLeft: 16,
  },
  iconImage: {
    width: 25,
    height: 25,
  },
  content: {
    marginTop: 14,
  },
  timelineText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    marginTop: 16,
  },
  imageGallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  galleryImage: {
    width: '48%',
    height: 140,
    marginVertical: 5,
  },
});
