import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, Button } from 'react-native';
import BackgroundImage from '../../assets/Background.png';

const ConnectionScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.contentContainer}>
                <Text style={styles.appTitle}>Plan your trips</Text>
                <Text style={styles.appDescrptn}>Connect with other travellers</Text>
                <Image
                    source={require('../../assets/Trip.png')}
                    style={styles.appIcon}
                />
                <View style={styles.connectionOptnsView}>
                    <TouchableOpacity
                        style={styles.logInBtnView}
                        onPress={() => navigation.navigate('Login')} // Navigate to LoginScreen on press
                    >
                    <Text style={styles.loginButtonText}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: 50,
                            marginLeft:25,
                            marginRight:26,
                            borderRadius:16,
                            alignItems:'center',
                            justifyContent:'center',
                            marginTop:30,
                            borderRadius:16,
                            borderWidth:2
                        }}
                        onPress={() => navigation.navigate('SignUp')} // Navigate to LoginScreen on press
                    >
                        <Text style={{colour:'black'}}>Create account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    appIcon: {
        height: 498,
        marginTop: 23,
    },
    appTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#151515',
        alignSelf: 'center',
        marginTop: 44
    },
    appDescrptn: {
        fontSize: 16,
        fontWeight: 'medium',
        color: '#151515',
        alignSelf: 'center',
        marginTop: 4
    },
    connectionOptnsView: {
        flexDirection: 'column',
        justifyContent:'space-evenly',
        alignSelf: 'center',
        bottom: 20,
        position: 'absolute',
        width:327,
        borderRadius:16,
        justifyContent:'center',
    },
    logInBtnView: {
        height: 50,
        backgroundColor:'#167351',
        marginLeft:25,
        marginRight:26,
        borderRadius:16,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30
    },
    loginButtonText:{
        color:'white'
    }
});

export default ConnectionScreen;
