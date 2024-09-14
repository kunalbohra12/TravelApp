import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnBoardingScreen from './Screens/Onboarding/OnBoardingScreen';
import ConnectionScreen from './Screens/Connect/ConnectionScreen';
import LoginScreen from './Screens/Login/LoginScreen';
import SignUpScren from './Screens/SignUp/SignUpScreen';
import ForgotPasswordScreen from './Screens/ForgotPassword/ForgotPasswordScreen';
import TouchIdScreen from './Screens/TouchID/TouchIDScreen';
const Stack = createStackNavigator();
// App Component
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='white' />

      <Stack.Navigator initialRouteName="OnBoarding">

        <Stack.Screen name="OnBoarding" component={OnBoardingScreen}
          options={{ headerShown: false }}///ConnectionScrreen
        />
        <Stack.Screen name="Connect" component={ConnectionScreen}
          options={{ headerShown: false }}///ConnectionScrreen
        />
        <Stack.Screen name="Login" component={LoginScreen}
          options={{ headerShown: false }}///ConnectionScrreen
        />
        <Stack.Screen name="SignUp" component={SignUpScren}
          options={{ headerShown: false }}///ConnectionScrreen
        />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen}
          options={{ headerShown: false }}///ConnectionScrreen
        />
        <Stack.Screen name="TouchId" component={TouchIdScreen}
          options={{ headerShown: false }}///ConnectionScrreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
