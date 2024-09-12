import React from 'react';
import { View, Image, Text,StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
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
                    <Text style={styles.loginDescrptn}>Alrady have an account</Text>



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
        alignSelf:'center',
        marginTop:6
    },
    appDescrptn:{
        fontSize: 16,
        fontWeight: 'medium',
        color: 'white',
        alignSelf:'center',
        marginTop:6
    },
    loginDescrptn:{
        fontSize: 16,
        fontWeight: 'medium',
        color: 'white',
        marginBoo:500,
        alignSelf:'center',
        position:'static'
    }
    
});

export default OnBoardingScreen;
