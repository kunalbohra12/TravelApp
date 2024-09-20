import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, Button } from 'react-native';
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
                    <View style={styles.buttonContainerView}>
                        <TouchableOpacity
                            style={styles.getStartedButton}
                            onPress={() => navigation.navigate('Destination')} // Navigate to LoginScreen on press
                        >
                            <Text style={{color:'white'}}>Get Started</Text>
                        </TouchableOpacity>
                        <View style={styles.loginDescrptnView}>
                            <Text style={{color:'white'}}>Already have an account ? Log in</Text>
                        </View>
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
    buttonContainerView:{
        flexDirection: 'column',
        justifyContent: 'center',
        height: 95,
        marginStart: 26,
        marginEnd: 26,
        position: 'absolute',
        alignItems: 'center',
        alignSelf: 'center',
        bottom: 69, // Adjust this value to set some padding from the bottom
        borderRadius:16
    },
     getStartedButton:{
        height:48,
        backgroundColor:'#167351',
        borderRadius:8,
        flex:1,
        width: 327,
         justifyContent:'center',
         alignItems:'center'
     },
     loginDescrptnView:{
        height:20,
        marginTop:20
     }
    
});

export default OnBoardingScreen;
