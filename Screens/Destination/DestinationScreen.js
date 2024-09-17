import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Platform, ScrollView, Image, Alert, ImageBackground, Animated } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import ForgotIcon from '../../assets/Forgot.png';
import DestinationImage from '../../assets/Destination.png';
import PagerView from 'react-native-pager-view';
const DestinationScreen = ({ navigation }) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    // Initialize the form
    const imageData = [
        { id: 1, destinationImages: DestinationImage },
        { id: 1, destinationImages: DestinationImage },
        { id: 1, destinationImages: DestinationImage },
        { id: 1, destinationImages: DestinationImage },
        { id: 1, destinationImages: DestinationImage },
        { id: 1, destinationImages: DestinationImage },
    ];

    const pages = [
        { id: '1', color: 'lightblue', text: 'Page 1' },
        { id: '2', color: 'lightgreen', text: 'Page 2' },
        { id: '3', color: 'lightcoral', text: 'Page 3' },
    ];

    const renderImageList = ({ item }) => (
        <View style={styles.imageView}>
            <Image style={styles.image}
                source={item.destinationImages}
            >
            </Image>
        </View>
    );
    return (
        //         <SafeAreaView style={styles.container}>
        //             <View style={styles.contentContainer}>
        //                 <ScrollView style={styles.scrollContainer}>
        //                     <Text style={styles.appTitle}>Get inspiration for your next trip</Text>
        //                     <FlatList
        //                         data={imageData}
        //                         renderItem={renderImageList}
        //                         horizontal={true}
        //                         showsHorizontalScrollIndicator={false}
        //                         contentContainerStyle={styles.flatListContainer}
        //                         onScroll={Animated.event(
        //                             [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        //                             {
        //                               useNativeDriver: false,
        //                             }
        //                           )}
        //                         >
        //                     </FlatList>
        //                     <Text style={styles.inspireText}>We’re happy to share our best tips for destinations where you can relax. But you find the nicest city trips as well!</Text>
        //                     <ExpandingDot
        //     data={imageData}
        //     expandingDotWidth={10}
        //     scrollX={scrollX}
        //     inActiveDotOpacity={0.6}
        //     dotStyle={{
        //         width: 10,
        //         height: 10,
        //         backgroundColor: '#347af0',
        //         borderRadius: 5,
        //         marginHorizontal: 5
        //     }}
        //     containerStyle={{
        //         top: 30,
        //     }}
        // />
        //                 </ScrollView>
        //             </View>
        //         </SafeAreaView>
        <SafeAreaView style={styles.safeAreaViewContainer}>

            <View style={styles.container}>

                <PagerView
                    style={styles.pagerView}
                    initialPage={0}
                    // onPageScroll={handleScroll} // Attach the event handler
                >
                    {/* {pages.map(page => ( */}
                    <View key="0" style={[styles.page, { backgroundColor: 'lighpink' }]}>
                        <Text style={styles.appTitle}>Get inspiration for your next trip</Text>
                        <FlatList
                            data={imageData}
                            renderItem={renderImageList}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.flatListContainer}
                        />
                        <Text style={styles.inspireText}>We’re happy to share our best tips for destinations where you can relax. But you find the nicest city trips as well!</Text>
                    </View>
                    <View key="1" style={[styles.page, { backgroundColor: 'lightgreen' }]}>
                     <Text style={styles.appTitle}>Get inspiration for your next trip</Text>
                    </View>
                    <View key="2" style={[styles.page, { backgroundColor: 'blue' }]}>
                    <Text style={styles.appTitle}>Get inspiration for your next trip</Text>
                    </View>
                    {/* ))} */}
                </PagerView>

                {/* </ScrollView> */}

            </View>
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    scrollContainer: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        paddingBottom: 32,
        alignItems: 'center',
        backgroundColor: 'red'
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
    flatListContainer: {
        // flex:1,
        height: 260, // Set a maximum height
        marginTop: 25,
        marginBottom: 50,
    },
    imageView: {
        height: 148,
        marginLeft: 12
    },
    inspireText: {
        marginTop: 20,
        marginLeft: 44,
        marginRight: 44,
        color: '#A9A9A9',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pagerView: {
        flex: 1,
        width: '100%',
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // height: 200,
        flex: 0.9
    },
    text: {
        fontSize: 24,
        color: '#fff',
    },
});

export default DestinationScreen;