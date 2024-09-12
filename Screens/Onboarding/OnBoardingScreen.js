import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, ImageBackground,TouchableOpacity, Button } from 'react-native';
import BackgroundImage from '../../assets/Background.png';

const OnBoardingScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.contentContainer}>
                <ImageBackground
                    source={require('../../assets/Background.png')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.appIcon}>
                        <Image
                            source={require('../../assets/RoadMap.png')}
                            style={styles.icon}
                        >
                        </Image>
                    </View>
                    <Text style={styles.appTitle}>Travel Guide</Text>
                    <Text style={styles.appDescrptn}>Find your best place for...</Text>
                    <TouchableOpacity
                        style={styles.getStartedButton}
                        onPress={() => navigation.navigate('Connect')} // Navigate to LoginScreen on press
                    >
                        <Text style={styles.loginButtonText}>Get Started</Text>
                    </TouchableOpacity>
                    <View style={styles.loginDescrptnView}>
                        <Text style={styles.loginDescrptn}>Already have an account ? Log in</Text>
                    </View>
               

                </ImageBackground>
                {/* Other UI components can go here */}
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
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        //    position:'static'
    },
    appIcon: {
        height: 75,
        width: 75,
        marginTop: 44,
        alignSelf: 'center',
        backgroundColor: '#FFCF4A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },
    appTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginTop: 6
    },
    appDescrptn: {
        fontSize: 16,
        fontWeight: 'medium',
        color: 'white',
        alignSelf: 'center',
        marginTop: 6
    },
    getStartedButton:{
        height:50,
        backgroundColor:'green',
        borderRadius:16,
        alignItems:'center',
        justifyContent:'center',
        marginStart: 26,
        marginEnd: 26,
        paddingVertical: 12,
        paddingHorizontal: 60,
        marginVertical:340

        },
    loginDescrptnView: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 30,
        // width:300,
        marginStart: 26,
        marginEnd: 26,
        position: 'absolute',
        alignItems: 'center',
        alignSelf: 'center',
        bottom: 69, // Adjust this value to set some padding from the bottom
    },
    loginDescrptn: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'regular',
        textAlign: 'center'
    },
    loginButtonText:{
        fontSize:16,
        fontWeight:'medium',
        color:'white'
    }
});

export default OnBoardingScreen;
