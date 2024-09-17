import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Platform, ScrollView, Image, Alert, ImageBackground, Animated } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import ForgotIcon from '../../assets/Forgot.png';
import DestinationImage from '../../assets/Destination.png';
import PagerView from 'react-native-pager-view';
import Dots from 'react-native-dots-pagination';
import MaskedView from '@react-native-masked-view/masked-view';
import BridgeIcon from '../../assets/Bridge.png';
import NavigateIcon from '../../assets/Navigate.png';

const DestinationScreen = ({ navigation }) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [currentPage, setCurrentPage] = useState(0); // State to track the current page

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
    // Handler for page change
    const onPageSelected = (e) => {
        setCurrentPage(e.nativeEvent.position); // Update current page when swiped
    };
    return (

        <SafeAreaView style={styles.safeAreaViewContainer}>
            <ScrollView style={styles.scrollViewContainer} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <PagerView
                        style={styles.pagerView}
                        initialPage={0}
                        onPageScroll={onPageSelected} // Attach the event handler
                    >
                        {/* {pages.map(page => ( */}
                        <View key="0" style={[styles.page, { backgroundColor: 'white' }]}>

                            <Text style={styles.appTitle}>Get inspiration for your next trip</Text>
                            {/* <View style={styles.contentContainer}> */}
                            <FlatList
                                data={imageData}
                                renderItem={renderImageList}
                                horizontal={true}
                                showsHorizontalScrollIndicator={true}
                                contentContainerStyle={styles.flatListContainer}
                            />
                            {/* </View> */}

                            <Text style={styles.inspireText}>We’re happy to share our best tips for destinations where you can relax. But you find the nicest city trips as well!</Text>
                        </View>
                        <View key="1" style={[styles.page, { backgroundColor: 'white' }]}>
                            <Text style={styles.appTitle}>Find best place for your journey</Text>
                            <View style={styles.maskContainer}>
                                <View style={styles.rhombusView}>
                                    <Image
                                        source={DestinationImage}
                                        style={styles.rhombusImage}
                                    />
                                </View>
                                <View style={styles.rhombusView}>
                                    <Image
                                        source={DestinationImage}
                                        style={styles.rhombusImage}
                                    />
                                </View>
                                <View style={styles.rhombusView}>
                                    <Image
                                        source={DestinationImage}
                                        style={styles.rhombusImage}
                                    />
                                </View>
                            </View>
                            <View style={styles.gridContainer}>
                                <View style={[styles.gridView, { marginLeft: -22, marginTop: -82 }]}>
                                    <Image
                                        source={BridgeIcon}
                                        style={styles.rhombusImage}
                                    />
                                </View>
                                <View style={[styles.gridView, { marginLeft: 35, marginTop: -72 }]}>
                                    <Image
                                        source={DestinationImage}
                                        style={styles.rhombusImage}
                                    />
                                </View>
                                <View style={[styles.gridView, { marginLeft: 35, marginTop: -72 }]}>
                                    <Image
                                        source={DestinationImage}
                                        style={styles.rhombusImage}
                                    />
                                </View>
                                <View style={[styles.gridView, { marginLeft: 35, marginTop: -72 }]}>
                                    <Image
                                        source={DestinationImage}
                                        style={styles.rhombusImage}
                                    />
                                </View>
                            </View>
                            <Text style={[styles.inspireText, { textAlign: 'center', marginLeft: 44, marginRight: 44 }]}>We’re happy to share our best tips for destinations where you can relax. But you find the nicest city trips as well!</Text>
                        </View>
                        <View key="2" style={[styles.page, { backgroundColor: 'white' }]}>
                            <Text style={styles.appTitle}>Find best deals</Text>
                        </View>
                        {/* ))} */}
                    </PagerView>
                    <View style={styles.dotViewContainer}>
                        <Dots
                            length={pages.length} // Total number of pages
                            active={currentPage}   // Current active page index
                            activeDotWidth={10}    // Width of the active dot
                            passiveDotWidth={10}    // Width of the inactive dot
                            activeColor={'#167351'} // Color of the active dot
                            passiveColor={'gray'} // Color of the inactive dot
                            marginHorizontal={5}   // Space between dots
                        />
                        <TouchableOpacity style={styles.scrollBtn}>
                            <Image
                                source={NavigateIcon}
                            />
                        </TouchableOpacity>
                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>


    );



    // return (
    //     <View style={styles.container}>
    //         <View style={styles.maskContainer}>
    //             <View style={styles.rhombusView}>
    //                 <Image
    //                     source={DestinationImage}
    //                     style={styles.rhombusImage}
    //                 />
    //             </View>
    //             <View style={styles.rhombusView}>
    //                 <Image
    //                     source={DestinationImage}
    //                     style={styles.rhombusImage}
    //                 />
    //             </View>
    //             <View style={styles.rhombusView}>
    //                 <Image
    //                     source={DestinationImage}
    //                     style={styles.rhombusImage}
    //                 />
    //             </View>
    //         </View>
    //         <View style={styles.gridContainer}>
    //             <View style={[styles.gridView, { marginLeft: -22, marginTop: -82 }]}>
    //                 <Image
    //                     source={BridgeIcon}
    //                     style={styles.rhombusImage}
    //                 />
    //             </View>
    //             <View style={[styles.gridView, { marginLeft: 35, marginTop: -72 }]}>
    //                 <Image
    //                     source={DestinationImage}
    //                     style={styles.rhombusImage}
    //                 />
    //             </View>
    //             <View style={[styles.gridView, { marginLeft: 35, marginTop: -72 }]}>
    //                 <Image
    //                     source={DestinationImage}
    //                     style={styles.rhombusImage}
    //                 />
    //             </View>
    //             <View style={[styles.gridView, { marginLeft: 35, marginTop: -72 }]}>
    //                 <Image
    //                     source={DestinationImage}
    //                     style={styles.rhombusImage}
    //                 />
    //             </View>
    //         </View>
    //     </View>
    // );
};







// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white'
//     },
//     maskContainer: {
//         flexDirection: 'row',
//         width: '100%',
//         backgroundColor: 'white',
//         height: 105
//     },
//     gridContainer: {
//         flexDirection: 'row',
//         width: '100%',
//         backgroundColor: 'white',
//         height: 105,
//         // marginTop:-8
//     },
//     rhombusView: {
//         width: 75, // Width of the rhombus
//         height: 75, // Height of the rhombus (it’s a square rotated 45 degrees)
//         backgroundColor: 'blue', // Background color
//         transform: [{ rotate: '45deg' }], // Rotates the square by 45 degrees
//         alignSelf: 'center',
//         marginLeft: 34,
//         justifyContent: 'center',
//         alignItems: 'center',
//         overflow: 'hidden'
//     },
//     gridView: {
//         width: 75, // Width of the rhombus
//         height: 75, // Height of the rhombus (it’s a square rotated 45 degrees)
//         backgroundColor: 'blue', // Background color
//         transform: [{ rotate: '45deg' }], // Rotates the square by 45 degrees
//         alignSelf: 'center',
//         justifyContent: 'center',
//         alignItems: 'center',
//         overflow: 'hidden'
//     },
//     rhombusImage: {
//         position: 'static',
//         resizeMode: 'cover',
//         width: 105,
//         height: 105,
//         resizeMode: 'cover',
//         transform: [{ rotate: '-45deg' }],

//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white'
//     },
//     maskContainer: {
//         flexDirection: 'row',
//         width: '100%',
//         backgroundColor: 'white',
//         height: 105
//     },
//     gridContainer: {
//         flexDirection: 'row',
//         width: '100%',
//         backgroundColor: 'white',
//         height: 105,
//         // marginTop:-8
//     },
//     rhombusView: {
//         width: 75, // Width of the rhombus
//         height: 75, // Height of the rhombus (it’s a square rotated 45 degrees)
//         backgroundColor: 'blue', // Background color
//         transform: [{ rotate: '45deg' }], // Rotates the square by 45 degrees
//         alignSelf: 'center',
//         marginLeft: 34,
//         justifyContent: 'center',
//         alignItems: 'center',
//         overflow: 'hidden'
//     },
//     gridView: {
//         width: 75, // Width of the rhombus
//         height: 75, // Height of the rhombus (it’s a square rotated 45 degrees)
//         backgroundColor: 'blue', // Background color
//         transform: [{ rotate: '45deg' }], // Rotates the square by 45 degrees
//         alignSelf: 'center',
//         justifyContent: 'center',
//         alignItems: 'center',
//         overflow: 'hidden'
//     },
//     rhombusImage: {
//         position: 'static',
//         resizeMode: 'cover',
//         width: 105,
//         height: 105,
//         resizeMode: 'cover',
//         transform: [{ rotate: '-45deg' }],

//     }
// });




const styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollContainer: {
        flex: 1
    },
    contentContainer: {
        flex: 0.9,
        alignItems: 'center',
        backgroundColor: 'black',
        marginTop: 40
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
        height: '80%',
        backgroundColor: 'lightpink',
        marginTop: 40,

    },
    imageView: {
        height: 148,
        marginLeft: 12,
        marginTop: 12
    },
    inspireText: {
        marginTop: 32,
        marginLeft: 44,
        marginRight: 44,
        marginBottom: 41,
        color: '#A9A9A9',
        textAlign: 'center'
    },
    pagerView: {
        flex: 1,
        width: '100%',
        backgroundColor: 'lightpink'
    },
    page: {
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        // height: 200,
        flex: 1
    },
    text: {
        fontSize: 24,
        color: '#fff',
    },
    maskContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        height: 105,
        marginTop: 60
    },
    gridContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        height: 105,
        // marginTop:-8
    },
    rhombusView: {
        width: 75, // Width of the rhombus
        height: 75, // Height of the rhombus (it’s a square rotated 45 degrees)
        backgroundColor: 'blue', // Background color
        transform: [{ rotate: '45deg' }], // Rotates the square by 45 degrees
        alignSelf: 'center',
        marginLeft: 34,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    gridView: {
        width: 75, // Width of the rhombus
        height: 75, // Height of the rhombus (it’s a square rotated 45 degrees)
        backgroundColor: 'blue', // Background color
        transform: [{ rotate: '45deg' }], // Rotates the square by 45 degrees
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    rhombusImage: {
        position: 'static',
        resizeMode: 'cover',
        width: 105,
        height: 105,
        resizeMode: 'cover',
        transform: [{ rotate: '-45deg' }],

    },
    dotViewContainer: {
        alignSelf: 'center',
        top: 104,
        height: 24,
    },
    scrollBtn: {
        height: 17,
        width: 17,
        marginRight: 27,
        alignSelf: 'flex-end',
        bottom: 74,
    },
    // navigateIcon:{

    // }
});

export default DestinationScreen;