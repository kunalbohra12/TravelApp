import React, { useEffect, useState } from 'react';
import { StatusBar, ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './Screens/SignUp/SignUpScreen';
import LoginScreen from './Screens/Login/LoginScreen';
import OnBoardingScreen from './Screens/Onboarding/OnBoardingScreen';
import ConnectionScreen from './Screens/Connect/ConnectionScreen';
import ForgotPasswordScreen from './Screens/ForgotPassword/ForgotPasswordScreen';
import TouchIdScreen from './Screens/TouchID/TouchIDScreen';
import HomeScreen from './Screens/Home/HomeScreen';
import DestinationScreen from './Screens/Destination/DestinationScreen';
import BottomTabBarScreen from './TabBar/BottomTabBar';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(); // Ignores all warning messages

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='black' />

      <Stack.Navigator initialRouteName="OnBoarding">

        <Stack.Screen name="OnBoarding" component={OnBoardingScreen}
          options={{ headerShown: false }}///ConnectionScrreen
        />
          <Stack.Screen name="Dashboard" component={DestinationScreen}
          options={{ headerShown: false }}///ConnectionScrreen
        />
         <Stack.Screen
          name="TabBar"
          component={BottomTabBarScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Connect" component={ConnectionScreen}
          options={{ headerShown: false }}///ConnectionScrreen
        />
        <Stack.Screen name="Login" component={LoginScreen}
          options={{ headerShown: false }}///ConnectionScrreen
        />
        <Stack.Screen name="SignUp" component={SignUpScreen}
          options={{ headerShown: false }}///ConnectionScrreen
        />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen}
          options={{ headerShown: false }}///ConnectionScrreen
        />
        <Stack.Screen name="TouchId" component={TouchIdScreen}
          options={{ headerShown: false }}///ConnectionScrreen
        /> */}
        <Stack.Screen name="Home" component={HomeScreen}
          options={{ headerShown: false }}///ConnectionScrreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
