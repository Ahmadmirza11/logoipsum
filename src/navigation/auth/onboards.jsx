import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Screen Imports
import Splash from '../../screens/Splash';
import Onboarding from '../../screens/onboarding';
import Login from '../../screens/authorize/login';
import Myotp from '../../screens/authorize/myotp';
import Signin from '../../screens/authorize/signin';
import Homescreen from '../../screens/home/homescreen';
import Explor from '../../screens/home/explor';
import Profile from '../../screens/home/profile';
import Notification from '../../screens/home/notification';
import Homesearch from '../../screens/home/homesearch';
import Meusium from '../../screens/home/meusium';
import Checkin from '../../screens/home/checkin';
import Timeline from '../../screens/home/timeline';
import Editprofile from '../../screens/home/Editprofile';
import Friendslist from '../../screens/home/Friendslist';
import Setting from '../../screens/home/Setting';
import Privacy from '../../screens/home/privacy';
import Friendrequest from '../../screens/home/Friendrequest';
import Block from '../../screens/home/block';
import Shadule from '../../screens/home/shadule';
import Help from '../../screens/home/help';
import About from '../../screens/home/about';
import Account from '../../screens/home/account';
import Policy from '../../screens/home/policy';
import Terms from '../../screens/home/terms';
import Language from '../../screens/home/Language';
import Pakages from '../../screens/home/pakages';
import Selectpakage from '../../screens/home/selectpakage';
import Location from '../../screens/home/location';
// import Pages from './pages';

// Stack and Tab Navigator
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Onboarding Stack Navigator
function Onboards() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Splash} />
      <Stack.Screen name="Onboard" component={Onboarding} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="otpFunction" component={Myotp} />
      <Stack.Screen name="signin" component={Signin} />
    </Stack.Navigator>
  );
}

// Bottom Tab Navigator
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explor}
        options={{
          tabBarIcon: ({ color, size }) => (
            // <Icon name="search-outline" color={color} size={size} />
            <Image style={styles.pin} source={require('../../images/explore.png')} /> 
          ),
        }}
      />
        <Tab.Screen
        name="Timeline"
        component={Timeline}
        options={{
          tabBarIcon: ({ color, size }) => (
            // <Icon name="book-outline" color={color} size={size} />
            <Image style={styles.pin} source={require('../../images/Documen.png')} /> 
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
    
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            // <Icon name="person-outline" color={color} size={size} />
            <Image style={styles.pin} source={require('../../images/profile.png')} /> 
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Main Stack Navigator
export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="Onboards" component={Onboards} />
      <Stack.Screen name="Tabs" component={MyTabs} />
      <Stack.Screen name="search" component={Homesearch} />
      <Stack.Screen name="musium" component={Meusium} />
      <Stack.Screen name="checkin" component={Checkin} />
      <Stack.Screen name="Editprofile" component={Editprofile} />
      <Stack.Screen name="Friendlist" component={Friendslist} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="privacy" component={Privacy} />
      <Stack.Screen name="Friendrequest" component={Friendrequest} />
      <Stack.Screen name="Block" component={Block} />
      <Stack.Screen name="saudule" component={Shadule} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Policy" component={Policy} />
      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="pakages" component={Pakages} />
      <Stack.Screen name="Selectpakage" component={Selectpakage} />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  pin: {
    width: 25,
    height: 25,
    // resizeMode: 'contain',
    // marginHorizontal: 10,
  },
});
