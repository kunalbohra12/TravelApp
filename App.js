import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnBoardingScreen from './Screens/Onboarding/OnBoardingScreen';
const Stack = createStackNavigator();
// App Component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen}
        options={{ headerShown: false }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
