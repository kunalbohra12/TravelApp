import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, Button } from 'react-native';
import BackgroundImage from '../../assets/Background.png';
import FacebookIcon from '../../assets/Facebook.png';
import TwitterIcon from '../../assets/Twitter.png';
const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.appTitle}>Log in</Text>
                <View style={styles.segmentView}>
                    <TouchableOpacity
                        style={styles.fbLoginBtnView}
                        onPress={() => navigation.navigate('Login')} // Navigate to LoginScreen on press
                    >
                        <Image
                            source={FacebookIcon}
                            style={{
                                marginLeft: 20,
                            }}
                        />
                        <Text style={styles.buttonText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.fbLoginBtnView, { marginLeft: 13 }]}
                        onPress={() => navigation.navigate('Login')} // Navigate to LoginScreen on press
                    >
                        <Image
                            source={TwitterIcon}
                            style={{
                                marginLeft: 20,
                            }}
                        />
                        <Text style={styles.buttonText}>Twitter</Text>
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

    appTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#151515',
        alignSelf: 'center',
        marginTop: 44
    },
    segmentView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        borderRadius: 16,
        justifyContent: 'center',
        marginLeft: 24,
        marginRight: 24,
        marginTop: 32
    },
    fbLoginBtnView: {
        flexDirection: 'row',
        height: 48,
        width: 157,
        backgroundColor: '#167351',
        // justifyContent:'center',
        alignItems: 'center',
        borderRadius: 16
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'regular',
        color: 'white',
        marginLeft: 20
    }
});

export default LoginScreen;
