// Loader.js
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet,Dimensions } from 'react-native';

const Loader = ({ duration = 3000, size = 'large', color = '#0000ff' }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, [duration]);

  if (!visible) return null;

  return (
    <View style={styles.loaderContainer}>
    <View style={styles.loaderWrapper}>
      <ActivityIndicator size={size} color={color} />
    </View>
  </View>
  );
};
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    loaderContainer: {
        position: 'absolute',
        width: width,
        height: '120%',
        alignSelf:'center',
        justifyContent: 'center',  
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        zIndex: 10, // Ensures loader stays on top of other elements
      },
      loaderWrapper: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5, // For Android shadow effect
      },
});

export default Loader;
