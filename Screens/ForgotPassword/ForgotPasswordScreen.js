import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView,Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import ForgotIcon from '../../assets/Forgot.png';

const ForgotPasswordScreen = ({ navigation }) => {
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

          <Text style={styles.appTitle}>Forgot Paswword</Text> 
          <Image style={styles.ForgotImage}
           source={ForgotIcon}
          >
            
          </Image>
          <Text style={{ color: 'lightgray',marginStart:40,marginRight:40,marginTop:22,textAlign:'center'}}>Enter your email below to receive your password reset instructions</Text>
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
          </View>
          <TouchableOpacity style={styles.logInBtnView} onPress={console.log('Sign Up API not Setup')}>
            <Text style={{ color: 'white' }}>send Password</Text>
          </TouchableOpacity>
            <Text style={{ color: 'black',marginStart:5,marginTop:90}}>I remember the password</Text>
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
  ForgotImage:{
    height:227,
    marginTop:40,
    width:'100%',
    resizeMode:'contain'
  }
});

export default ForgotPasswordScreen;
