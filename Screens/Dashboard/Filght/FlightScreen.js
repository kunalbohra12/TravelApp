import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';
const FlightScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.contentContainer}>
                {/* <Text style={styles.screenTitle}>Hotel Screen</Text> */}
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825, // Default latitude
                        longitude: -122.4324, // Default longitude
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324
                        }}
                        title="Hotel Location"
                        description="This is the hotel's location"
                    />
                </MapView>
           </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'darkblue',
        justifyContent: 'center'
    },
    screenTitle: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 33,
        marginBottom: 20,
    },
    map: {
        width: '100%',
        height: '100%',
    }
});

export default FlightScreen;
