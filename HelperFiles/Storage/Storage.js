// storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save login state
export const saveLoginState = async (loggedIn) => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(loggedIn));
    console.log('User data saved successfully.');

  } catch (e) {
    console.error('Failed to save login state:', e);
  }
};

// Get login state                                                      
export const getLoginState = async () => {
    // Retrieve the user data from AsyncStorage
    try {
      const userDataString = await AsyncStorage.getItem('userToken');
      
      if (userDataString !== null) {
        // Parse the string back into an object
        const userData = JSON.parse(userDataString);
        console.log('Retrieved user data:', userData);
  
        // Now you can access the specific fields, e.g., token, name, etc.
        console.log('User Name:', userData.name);
        console.log('User Token:', userData.token);
        
        return userData; // Return the parsed user data if needed
      } else {
        console.log('No user data found in storage.');
        return null;
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  
//   try {
//     const value = await AsyncStorage.getItem('userData');
//     return value !== null ? JSON.parse(value) : false;
//   } catch (e) {
//     console.error('Failed to fetch login state:', e);
//     return false;
//   }
};

// Remove login state (for logging out)
export const removeLoginState = async () => {
  try {
    await AsyncStorage.removeItem('userData');
  } catch (e) {
    console.error('Failed to remove login state:', e);
  }
};
