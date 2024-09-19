import React from 'react';
import { View,Image, TouchableOpacity,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TouchIdScreen from '../Screens/TouchID/TouchIDScreen';
import DashboardScreen from '../Screens/Home/HomeScreen';
import HomeScreen from '../Screens/Destination/DestinationScreen';
import ForgotPasswordScreen from '../Screens/ForgotPassword/ForgotPasswordScreen';
import ConnectionScreen from '../Screens/Connect/ConnectionScreen';

// Import custom icons
import ExploreIcon from '../assets/Explore.png';
import TripIcon from '../assets/Trips.png';
import SavedIcon from '../assets/Saved.png';
import InboxIcon from '../assets/Inbox.png';
import ProfileIcon from '../assets/Profile.png';
const Tab = createBottomTabNavigator();


const BottomTabBarScreen = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          if (route.name === 'Explore') {
            iconSource = focused ? ExploreIcon : ExploreIcon; // Use different images if you have active/inactive states
          } else if (route.name === 'Trips') {
            iconSource = focused ? TripIcon : TripIcon; // Use different images if you have active/inactive states
          } else if (route.name === 'Saved') {
            iconSource = focused ? SavedIcon : SavedIcon; // Use different images if you have active/inactive states
          } else if (route.name === 'Inbox') {
            iconSource = focused ? InboxIcon : InboxIcon; // Use different images if you have active/inactive states
          }
          else if (route.name === 'Profile') {
            iconSource = focused ? ProfileIcon : ProfileIcon; // Use different images if you have active/inactive states
          }
          return (
              <View>
                <Image
                  source={iconSource}
                  style={{ width: 33, height: 30, tintColor: color }}
                />
                {/* <View
                  style={{
                    backgroundColor: focused ? 'white' : 'transparent',
                    height: 3,
                    marginTop: 2,
                    width: 15,
                    borderRadius: 3,
                    alignSelf: 'center',
                    marginRight: 3,
                    marginLeft: 2
                  }}
                /> */}
              </View>
          );
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#167351',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: 'white',
          elevation: 0,
          position: 'absolute',
          borderColor: 'white',
          borderTopWidth: 0,
          height: 50,
        },

        tabBarShowLabel: true, // Optional: Hide tab labels
        tabBarLabelPosition:'below-icon',
        tabBarItemStyle:{
            marginStart:18,
            marginEnd:18,
        }
        
        // tabBarBackground: () => (
        //   <View style={{ backgroundColor: 'transparent', flex: 1 }} />  // Extra transparency
        // ),
      })}
    >
      <Tab.Screen name="Explore" component={ExploreScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Trips" component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Saved" component={DashboardScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Inbox" component={ForgotPasswordScreen}
        options={{ headerShown: false }}
        
      />
    <Tab.Screen name="Profile" component={ConnectionScreen}
        options={{ headerShown: false }}
        
      />
    </Tab.Navigator>
  );
};

export default BottomTabBarScreen;
