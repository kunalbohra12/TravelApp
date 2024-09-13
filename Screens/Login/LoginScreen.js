import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import FacebookIcon from '../../assets/Facebook.png';
import * as Facebook from 'expo-facebook';
import TwitterIcon from '../../assets/Twitter.png';

// Ask for consent first if necessary
// Possibly only do this for iOS if no need to handle a GDPR-type flow

const LoginScreen = ({ navigation }) => {
 
   
  const handleFacebookLogin = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '392715797206549',
      });

      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });

      if (type === 'success') {
        // Successfully logged in
        Alert.alert('Logged in!', `Token: ${token}`);
        // You can send the token to your server or use it as needed
      } else {
        Alert.alert('Login cancelled');
      }
    } catch (error) {
      Alert.alert(`Facebook Login Error: ${error.message}`);
      console.log(error.message);
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.appTitle}>Log in</Text>

        <View style={styles.segmentView}>
          <TouchableOpacity style={styles.fbLoginBtnView} onPress={handleFacebookLogin}>
            <Image source={FacebookIcon} style={styles.icon} />
            <Text style={styles.buttonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.fbLoginBtnView, { marginLeft: 13 }]} onPress={() => navigation.navigate('Login')}>
            <Image source={TwitterIcon} style={styles.icon} />
            <Text style={styles.buttonText}>Twitter</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>or log in with email</Text>

        <View style={styles.inputContainer}>
          <View style={styles.emailInputContainer}>
            <TextInput style={styles.emailInput} placeholder='Your email' placeholderTextColor='#000000' />
          </View>
          <View style={styles.passwordInputContainer}>
            <TextInput style={styles.passwdInput} placeholder='Password' placeholderTextColor='#000000' secureTextEntry />
          </View>
        </View>

        <TouchableOpacity style={styles.forgotPasswordBtn} onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logInBtnView} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.logInText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't Have an account?</Text>
          <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpBtnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    color: 'white',
    marginLeft: 20,
  },
  icon: {
    marginLeft: 20,
  },
  orText: {
    color: 'black',
    alignSelf: 'center',
    marginTop: 32,
    fontSize: 14,
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
    marginTop: 24,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  emailInput: {
    fontSize: 16,
  },
  passwdInput: {
    fontSize: 16,
  },
  forgotPasswordBtn: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 16,
  },
  forgotPasswordText: {
    color: 'black',
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
  logInText: {
    color: 'white',
  },
  signUpContainer: {
    marginTop: 80,
    alignItems: 'center',
    width: '100%',
  },
  signUpText: {
    color: 'black',
    alignSelf: 'center',
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
  signUpBtnText: {
    color: 'black',
  },
});

export default LoginScreen;

// import React from 'react';
// import { useEffect,View, Image, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
// import FacebookIcon from '../../assets/Facebook.png';
// import TwitterIcon from '../../assets/Twitter.png';
// import { LoginButton, AccessToken } from 'react-native-fbsdk-next';

// const LoginScreen = ({ navigation }) => {

//   const handleLoginManager = ()=> {
//     LoginManager.logInWithPermissions(["public_profile"]).then(
//         function(result) {
//           if (result.isCancelled) {
//             console.log("Login cancelled");
//           } else {
//             console.log(
//               "Login success with permissions: " +
//                 result.grantedPermissions.toString()
//             );
//           }
//         },
//         function(error) {
//           console.log("Login fail with error: " + error);
//         }
//       )
//   };
   

//     return (
//         <SafeAreaView style={styles.container}>
//             <KeyboardAvoidingView
//                 style={styles.container}
//                 behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//                 keyboardVerticalOffset={0} // Adjust based on your design
//             >
//                 <ScrollView contentContainerStyle={styles.contentContainer}>
//                     <Text style={styles.appTitle}>Log in</Text>
                    
//                     <View style={styles.segmentView}>
//                         <TouchableOpacity style={styles.fbLoginBtnView} onPress={() => navigation.navigate('Login')}>
//                             <Image source={FacebookIcon} style={{ marginLeft: 20 }} />
//                             <Text style={styles.buttonText}>Facebook</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={[styles.fbLoginBtnView, { marginLeft: 13 }]} onPress={() => navigation.navigate('Login')}>
//                             <Image source={TwitterIcon} style={{ marginLeft: 20 }} />
//                             <Text style={styles.buttonText}>Twitter</Text>
//                         </TouchableOpacity>
//                     </View>

//                     <Text style={{ color: 'black', alignSelf: 'center', marginTop: 32, fontSize: 14 }}>or log in with email</Text>

//                     <View style={styles.inputContainer}>
//                         <View style={styles.emailInputContainer}>
//                             <TextInput style={styles.emailInput} placeholder='Your email' placeholderTextColor={'#000000'} />
//                         </View>
//                         <View style={styles.passwordInputContainer}>
//                             <TextInput style={styles.passwdInput} placeholder='Password' placeholderTextColor={'#000000'} secureTextEntry />
//                         </View>
//                     </View>

//                     <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 20, marginTop: 16 }}
//                        onPress={() => navigation.navigate(handleLoginManager)}
//                     >
//                         <Text style={{}}>Forgot Password?</Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={styles.logInBtnView}>
//                         <Text style={{ color: 'white' }}>Log In</Text>
//                     </TouchableOpacity>
                    
//                     <View style={styles.signUpContainer}>
//                         <Text style={{ color: 'black', alignSelf: 'center' }}>Don't Have an account?</Text>
//                         <TouchableOpacity style={styles.signUpBtn}>
//                             <Text style={{ color: 'black' }}>Sign Up</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </ScrollView>
//             </KeyboardAvoidingView>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//     },
//     contentContainer: {
//         paddingHorizontal: 24,
//         paddingBottom: 32,
//         alignItems: 'center',
//     },
//     appTitle: {
//         fontSize: 28,
//         fontWeight: 'bold',
//         color: '#151515',
//         marginTop: 44,
//     },
//     segmentView: {
//         flexDirection: 'row',
//         marginTop: 32,
//         justifyContent: 'space-between',
//     },
//     fbLoginBtnView: {
//         flexDirection: 'row',
//         height: 48,
//         width: 157,
//         backgroundColor: '#167351',
//         alignItems: 'center',
//         borderRadius: 16,
//     },
//     buttonText: {
//         fontSize: 14,
//         fontWeight: 'regular',
//         color: 'white',
//         marginLeft: 20,
//     },
//     inputContainer: {
//         marginTop: 22,
//         width: '100%',
//     },
//     emailInputContainer: {
//         height: 48,
//         borderWidth: 2,
//         borderRadius: 16,
//         justifyContent: 'center',
//         paddingHorizontal: 15,
//     },
//     passwordInputContainer: {
//         height: 48,
//         borderWidth: 2,
//         borderRadius: 16,
//         marginTop: 24,
//         justifyContent: 'center',
//         paddingHorizontal: 15,
//     },
//     emailInput: {
//         fontSize: 16,
//     },
//     passwdInput: {
//         fontSize: 16,
//     },
//     logInBtnView: {
//         marginTop: 16,
//         height: 48,
//         width: '97%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#167351',
//         borderRadius: 16,
//     },
//     signUpContainer: {
//         marginTop:80, 
//         alignItems: 'center',
//         width: '100%',
//     },
//     signUpBtn: {
//         marginTop: 16,
//         width: '97%',
//         height: 48,
//         borderWidth: 2,
//         borderRadius: 16,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

// export default LoginScreen;
