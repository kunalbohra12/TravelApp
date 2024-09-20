import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView,Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { images } from '../../HelperFiles/Images/Images';
import FacebookIcon from '../../assets/Facebook.png';
import TwitterIcon from '../../assets/Twitter.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = ({ navigation }) => {
  // Initialize the form
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  // Handle form submission
  const handleLoginManager = async (data) => {
    try {
      console.log('Form data:', data);
      
      // API endpoint
      const response = await axios.post(
        'http://3.144.131.203/ecommerce-web/public/api/login',
        {
          email: data.email,
          password: data.password,
        },
      );
      
      if (response.data.success) {
        const userData = response.data; // Assume these fields are in the response
        // Navigate to HomeScreen after successful login
        navigation.navigate('Destination');
        console.log('push to Destination');

      } else {
        console.log('Error', response.message);
      }
    } catch (error) {
      console.error('Error sending data:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
      >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.appTitle}>Log in</Text>

          <View style={styles.segmentView}>
            <TouchableOpacity style={styles.fbLoginBtnView} onPress={() => navigation.navigate('Login')}>
              <Image source={images.FacebookIcon} style={{ marginLeft: 20 }} />
              <Text style={styles.buttonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.fbLoginBtnView, { marginLeft: 13 }]} onPress={() => navigation.navigate('Login')}>
              <Image source={images.TwitterIcon} style={{ marginLeft: 20 }} />
              <Text style={styles.buttonText}>Twitter</Text>
            </TouchableOpacity>
          </View>

          <Text style={{ color: 'black', alignSelf: 'center', marginTop: 32, fontSize: 14 }}>or log in with email</Text>

          <View style={styles.inputContainer}>
            <View style={styles.emailInputContainer}>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Invalid email address',
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.inputText}
                    placeholder="Your email"
                    placeholderTextColor={'#000000'}
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
            </View>
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
            <View style={styles.passwordInputContainer}>
              <Controller
                control={control}
                name="password"
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.inputText}
                    placeholder='Password'
                    placeholderTextColor={'#000000'}
                    value={value}
                    secureTextEntry
                    onChangeText={onChange}
                  />
                )}
              />
            </View>
            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
          </View>

          <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 20, marginTop: 16 }}
            onPress={() => navigation.navigate('Forgot')} // Ensure this navigates to the correct screen
          >
            <Text>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logInBtnView} onPress={handleSubmit(handleLoginManager)}>
            <Text style={{ color: 'white' }}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
            <Text style={{ color: 'black', alignSelf: 'center' }}>Don't Have an account?</Text>
            <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate('SignUp')}>
              <Text style={{ color: 'black' }}>Sign Up</Text>
            </TouchableOpacity>
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
  
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#151515',
    marginTop: 44,
  },
  segmentView: {
    flexDirection: 'row',
    marginTop: 32,
    justifyContent: 'space-between',
  },
  fbLoginBtnView: {
    flexDirection: 'row',
    height: 48,
    width: 157,
    backgroundColor: '#167351',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'regular',
    color: 'white',
    marginLeft: 20,
  },
  inputContainer: {
    marginTop: 22,
    width: '100%',
  },
  emailInputContainer: {
    height: 48,
    borderWidth: 2,
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  passwordInputContainer: {
    height: 48,
    borderWidth: 2,
    borderRadius: 16,
    marginTop: 20,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  inputText: {
    fontSize: 16,
  },
  passwdInput: {
    fontSize: 16,
  },
  logInBtnView: {
    marginTop: 16,
    height: 48,
    width: '97%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#167351',
    borderRadius: 16,
  },
  signUpContainer: {
    marginTop: 80,
    alignItems: 'center',
    width: '100%',
  },
  signUpBtn: {
    marginTop: 16,
    width: '97%',
    height: 48,
    borderWidth: 2,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    textAlign:'left',
    marginLeft:10
  },
});

export default LoginScreen;
