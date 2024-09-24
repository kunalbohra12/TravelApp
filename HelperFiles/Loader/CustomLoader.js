import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import LoaderKit from 'react-native-loader-kit'
export default function CustomLoader() {

<LoaderKit
  style={{ width: 50, height: 50 }}
  name={'BallPulse'} // Optional: see list of animations below
  color={'red'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
/>

  return (
    <AnimatedLoader
      visible={visible}
      overlayColor="rgba(255,255,255,0.75)"
      animationStyle={styles.lottie}
      speed={1}>
      <Text>Doing something...</Text>
    </AnimatedLoader>
  );
}
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
