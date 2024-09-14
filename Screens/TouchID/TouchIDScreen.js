import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView,Image } from 'react-native';
 
const TouchIdScreen = ({ navigation }) => {
 
    // Handle form submission
   
  
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={0}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.contentContainer}>
  
            <Text style={styles.appTitle}>Touch ID</Text>
            <Text style={{marginLeft:44,marginRight:44,marginTop:8,textAlign:'center'}}>Place and hold your finger on the fingerprint reader </Text>

            
            
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    scrollContainer:{
      flex:1,
    },
    contentContainer: {
     flex:1,
     paddingBottom: 32,
     alignItems: 'center',
    },
    appTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#151515',
      marginTop: 44,
    },
  });
  
  export default TouchIdScreen;
  