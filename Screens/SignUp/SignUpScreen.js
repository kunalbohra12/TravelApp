import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView,Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import FacebookIcon from '../../assets/Facebook.png';
import TwitterIcon from '../../assets/Twitter.png';

const SignUpScren = ({ navigation }) => {
  // Initialize the form
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
       username:'',
      email: '',
      password: '',
      confirmPassword:''
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
          username: data.username,
          email: data.email,
          password: data.password,

        },
        // {
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // }
      );
      
      console.log('Response Data:', response.data);
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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>

          <Text style={styles.appTitle}>Create Account</Text>

          <View style={styles.segmentView}>
            <TouchableOpacity style={styles.fbLoginBtnView} onPress={() => navigation.navigate('Login')}>
              <Image source={FacebookIcon} style={{ marginLeft: 20 }} />
              <Text style={styles.buttonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.fbLoginBtnView, { marginLeft: 13 }]} onPress={() => navigation.navigate('Login')}>
              <Image source={TwitterIcon} style={{ marginLeft: 20 }} />
              <Text style={styles.buttonText}>Twitter</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
          <View style={styles.userNameInputcontainer}>
              <Controller
                control={control}
                name="username"
                rules={{
                  required: 'username is required',
                  pattern: {
                    message: 'Invalid username is required',
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="username"
                    placeholderTextColor={'#000000'}
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
            </View>
            {errors.username && <Text style={styles.error}>{errors.username.message}</Text>}
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
                    style={styles.input}
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
                    style={styles.input}
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
            <View style={styles.confirmPasswdInputContainer}>
              <Controller
                control={control}
                name="confirmPassword"
                rules={{
                  required: 'Confirm Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder='Confirm Password'
                    placeholderTextColor={'#000000'}
                    value={value}
                    secureTextEntry
                    onChangeText={onChange}
                  />
                )}
              />
            </View>
            {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}
          </View>
          <TouchableOpacity style={styles.logInBtnView} onPress={console.log('Sign Up API not Setup')}>
            <Text style={{ color: 'white' }}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.signUpContainer}>
            <Text style>Already have an account?</Text>
            <TouchableOpacity style={{color:'black'}}
             onPress={('Login')}>
            <Text style={{ color: 'black',marginStart:5}}>Login</Text>
          </TouchableOpacity>
          </View>
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
    width: '90%',
  },
  userNameInputcontainer: {
    height: 48,
    borderWidth: 2,
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginTop: 50,

  },
  emailInputContainer: {
    height: 48,
    borderWidth: 2,
    borderRadius: 16,
    marginTop: 20,
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
  confirmPasswdInputContainer: {
    height: 48,
    borderWidth: 2,
    borderRadius: 16,
    marginTop: 20,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  input: {
    fontSize: 16,
  },
  logInBtnView: {
    marginTop: 16,
    height: 48,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#167351',
    borderRadius: 16,
  },
  signUpContainer: {
    flexDirection:'row',
    marginTop: 80,
    alignItems: 'center',
    width: '70%',
    alignSelf:'center',
    justifyContent:'center'
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

export default SignUpScren;
