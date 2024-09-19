
import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Platform, ScrollView, Image, Alert, ImageBackground, Animated } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import ForgotIcon from '../../assets/Forgot.png';
import DestinationImage from '../../assets/Destination.png';
import PagerView from 'react-native-pager-view';

const HomeScreen = ({ navigation }) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [currentPage, setCurrentPage] = useState(0); // State to track the current page

    const imageData = [
        { id: 1, destinationImages: DestinationImage },
        { id: 2, destinationImages: DestinationImage },
        { id: 3, destinationImages: DestinationImage },
        { id: 4, destinationImages: DestinationImage },
        { id: 5, destinationImages: DestinationImage },
        { id: 6, destinationImages: DestinationImage },
    ];

    const renderImageList = ({ item }) => (
        <View style={styles.imageView}>
            <Image style={styles.image} source={item.destinationImages} />
        </View>
    );

    const onPageSelected = (e) => {
        setCurrentPage(e.nativeEvent.position); // Update current page when swiped
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }} >
                <PagerView style={styles.pagerView}
                    initialPage={0}
                    onPageScroll={onPageSelected}
                >
                    <View key="0" style={styles.page}>
                        <Text style={styles.appTitle}>First page</Text>
                        <Text style={styles.appTitle}>First page</Text>
                        <Text style={styles.appTitle}>First page</Text>
                        <Text style={styles.appTitle}>First page</Text>
                        <Text style={styles.appTitle}>First page</Text>
                        <Text style={styles.appTitle}>First page</Text>
                        <Text style={styles.appTitle}>First page</Text>
                        <Text style={styles.appTitle}>First page</Text>
                        <Text style={styles.appTitle}>First page</Text>
                        <Text style={styles.appTitle}>First page</Text>
                        <Text style={styles.appTitle}>First page</Text>
                        <Text style={styles.appTitle}>First page</Text>
                        <Text style={styles.appTitle}>First page</Text>
                        <Text style={styles.appTitle}>First page</Text>

                    </View>
                    <View key="1">
                        <Text>Second page</Text>
                    </View>
                </PagerView>
                {/* <Text style={styles.appTitle}>First page</Text>
                <Text style={styles.appTitle}>First page</Text>
                <Text style={styles.appTitle}>First page</Text>
                <Text style={styles.appTitle}>First page</Text>
                <Text style={styles.appTitle}>First page</Text>
                <Text style={styles.appTitle}>First page</Text> */}


            </ScrollView>
        </SafeAreaView >

    );
};




const styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    pagerView: {
        flex: 1,
        backgroundColor: 'red',
        // width: '100%',
        // height: '100%',

    },
    page: {
        width: '100%',
        backgroundColor: 'red',
        flex: 1,
    },
    scrollViewStyle: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: 'violet', // Style applied to the ScrollView container (the viewport)
    },
    contentContainerStyle: {
        padding: 20, // Padding applied to the content inside the ScrollView
        backgroundColor: 'white',
        flexGrow: 1,
        // flex:1
    },
    appTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#151515',
        marginTop: 104,
        marginLeft: 63,
        marginRight: 62,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default HomeScreen;
