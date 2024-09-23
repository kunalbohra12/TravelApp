// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { images } from '../../HelperFiles/Images/Images';
import { getLoginState } from '../../HelperFiles/Storage/Storage';
const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       // After 3 seconds, navigate to the desired screen (e.g., HomeScreen)
//       navigation.replace('OnBoarding');
//     }, 500);

//     return () => clearTimeout(timer); // Cleanup the timer
//   }, [navigation]);
  useEffect(() => {
    const checkLoginState = async () => {
      const isLoggedIn = await getLoginState();
      if (isLoggedIn) {
        navigation.replace('TabBar');
      } else {
        navigation.replace('Login');
      }
    };
    // Simulate a loading time for splash screen
    setTimeout(checkLoginState, 2000); // 2 seconds delay
  }, [navigation]);
  return (
    <View style={styles.container}>
        <View style={styles.appIconView}>
        <Image
         style={styles.appIcon}
         source={images.LogoIcon}
        />
        </View>
        <Text style={styles.appTitle}>Travel Guide</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set background color
  },
  appIconView:{
    backgroundColor:'#FFCF4A',
    height:100,
    width:100,
    borderRadius:16,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  appIcon:{
    height:75,
    width:75,
  },
  appTitle:{
    // color:'#151515',
    color:'black',
    fontSize:24,
    fontWeight:'bold'
  }
});

export default SplashScreen;
