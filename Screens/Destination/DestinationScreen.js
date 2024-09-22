import React from 'react';
import { useState, useRef } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Platform, ScrollView, Image, Alert, ImageBackground, Animated } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import ForgotIcon from '../../assets/Forgot.png';
import DestinationImage from '../../assets/Destination.png';
import PagerView from 'react-native-pager-view';
import Dots from 'react-native-dots-pagination';
import MaskedView from '@react-native-masked-view/masked-view';
import BridgeIcon from '../../assets/Bridge.png';
import NavigateIcon from '../../assets/Navigate.png';
import PlaceIcon from '../../assets/Rome.png';
import LeftNavigation from '../../assets/LeftNavigation.png';
import PlacesIconOne from '../../assets/Paris.png';
import PlacesIconTwo from '../../assets/NewYork.png';
import PlacesIconThree from '../../assets/London.png';
import { images } from '../../HelperFiles/Images/Images';
const DestinationScreen = ({ navigation }) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [currentPage, setCurrentPage] = useState(0); // State to track the current page
    const pagerRef = useRef(null); // Reference to PagerView

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

    // Function to go to the next page
    const handleNextPage = () => {
        if (pagerRef.current) {
            const nextPage = currentPage + 1;
            if (nextPage < pages.length) {
                pagerRef.current.setPage(nextPage);
                setCurrentPage(nextPage);  // Update state to reflect the new page
            }
        }
    };


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

        <View style={styles.safeAreaViewContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <PagerView
                        style={styles.pagerView}
                        initialPage={0}
                        ref={pagerRef}
                        onPageScroll={onPageSelected} // Attach the event handler
                    >
                        {/* {pages.map(page => ( */}
                        <View key="0" style={[styles.page, { backgroundColor: 'white' }]}>
                            <Text style={styles.appTitle}>Get inspiration for your next trip</Text>
                            <FlatList
                                data={imageData}
                                renderItem={renderImageList}
                                horizontal={true}
                                showsHorizontalScrollIndicator={true}
                                contentContainerStyle={styles.flatListContainer}
                            />
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
                                        source={images.BridgeIcon}
                                        style={styles.rhombusImage}
                                    />
                                </View>
                                <View style={[styles.gridView, { marginLeft: 35, marginTop: -72 }]}>
                                    <Image
                                        source={images.DestinationIcon}
                                        style={styles.rhombusImage}
                                    />
                                </View>
                                <View style={[styles.gridView, { marginLeft: 35, marginTop: -72 }]}>
                                    <Image
                                        source={images.DestinationIcon}
                                        style={styles.rhombusImage}
                                    />
                                </View>
                                <View style={[styles.gridView, { marginLeft: 35, marginTop: -72 }]}>
                                    <Image
                                        source={images.DestinationIcon}
                                        style={styles.rhombusImage}
                                    />
                                </View>
                            </View>
                            <Text style={[styles.inspireText, { textAlign: 'center', marginLeft: 44, marginRight: 44 }]}>We’re happy to share our best tips for destinations where you can relax. But you find the nicest city trips as well!</Text>
                        </View>
                        <View key="2" style={[styles.page, { backgroundColor: 'white' }]}>
                                <TouchableOpacity style={styles.backNavigationBtn}
                                    onPress={() => navigation.goBack()}
                                >
                                    <Image
                                        source={images.LeftNavigationIcon}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.dealsTitle}>Find best deals</Text>
                                <View style={styles.dealsImageView}>
                                    <ImageBackground
                                        source={images.RomeIcon}
                                        style={styles.dealsImages}>
                                        <Text style={styles.placeText}>Rome</Text>
                                    </ImageBackground>
                                    <View style={styles.dealsPriceView}>
                                        <Text style={styles.priceTxt}>326$</Text>
                                    </View>
                                </View>
                                <View style={styles.stackView}>
                                    <View style={styles.imageStackView}>
                                        <ImageBackground
                                            source={images.ParisIcon}
                                            style={styles.dealsImages}
                                        >
                                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Paris</Text>
                                        </ImageBackground>
                                        <View style={[styles.dealsPriceView, { width: '45%' }]}>
                                            <Text style={{ fontWeight: 'medium', fontSize: 16, color: '#151515' }}>326$</Text>

                                        </View>
                                    </View>
                                    <View style={[styles.imageStackView, { marginLeft: 12 }]}>
                                        <ImageBackground
                                            source={images.NewYorkIcon}
                                            style={styles.dealsImages}
                                        >
                                            <Text style={styles.placeText}>New York</Text>
                                        </ImageBackground>
                                        <View style={[styles.dealsPriceView, { width: '45%' }]}>
                                            <Text style={styles.priceTxt}>326$</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.dealsImageView}>
                                    <ImageBackground
                                        source={images.LondonIcon}
                                        style={styles.dealsImages}
                                    >
                                        <Text style={styles.placeText}>London</Text>
                                    </ImageBackground>
                                    <View style={styles.dealsPriceView}>
                                        <Text style={styles.priceTxt}>326$</Text>

                                    </View>
                                </View>
                                <View style={{marginTop:20,height:50,backgroundColor:'#167351',width:'90%',marginHorizontal: 20,borderRadius:16}}>
                                <TouchableOpacity style={{ marginTop: 30,backgroundColor: '#167351',bottom: 15, width: '90%', marginHorizontal: 20 }}
                                        onPress={() => navigation.navigate('Connect')}>
                                    <Text style={{textAlign:'center',color:'#FFFFFF'}} >Get Started</Text>
                                </TouchableOpacity>
                                </View>
                        </View>
                        {/* ))} */}
                    </PagerView>
                    {currentPage !== 2 && (
                        <View style={styles.dotViewContainer}>
                            <Dots
                                length={3} // Total number of pages
                                active={currentPage}   // Current active page index
                                activeDotWidth={10}    // Width of the active dot
                                passiveDotWidth={10}    // Width of the inactive dot
                                activeColor={'#167351'} // Color of the active dot
                                passiveColor={'gray'} // Color of the inactive dot
                                marginHorizontal={5}   // Space between dots
                            />
                            <TouchableOpacity style={styles.scrollBtn}
                                onPress={handleNextPage}>
                                <Image
                                    source={NavigateIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>

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

const styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollContainer: {
        flex: 1
    },
    scrollViewContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        marginTop: 0
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
        height: 600,
        backgroundColor: 'white',
        marginTop: 40,
        paddingBottom: 30
    },
    imageView: {
        height: 148,
        marginLeft: 12,
        marginTop: 12
    },
    inspireText: {
        marginTop: 42,
        marginLeft: 44,
        marginRight: 44,
        marginBottom: 41,
        color: '#A9A9A9',
        textAlign: 'center'
    },
    pagerView: {
        height: 700,
        width: '100%',
        backgroundColor: 'red'
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
        backgroundColor: 'white', // Background color
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
        backgroundColor: 'white', // Background color
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
        height: 24,
        flexDirection: 'row',    // Align dots and button in a row
        justifyContent: 'space-between', // Center the dots and button
        alignItems: 'center',     // Align items vertically
        alignSelf: 'flex-end',
        marginBottom: 60,
        marginRight: 27,
        width: 194,
    },
    scrollBtn: {
        marginLeft: 20,           // Add space between the dots and the button
        padding: 10,
    },
    backNavigationBtn: {
        height: 24,
        width: 24,
        marginTop: 20,
        marginLeft: 22
    },
    dealsTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#151515',
        marginTop: 10,
        // marginLeft: 63,
        // marginRight: 62,
        textAlign: 'center',
        alignItems: 'center',
    },
    dealsImageView: {
        marginTop: 24,
        marginHorizontal: 16,
        justifyContent: 'center',
        height: 157,
    },
    dealsImages: {
        width: '100%',
        height: 157,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        overflow: 'hidden'
    },
    placeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    dealsPriceView: {

        backgroundColor: 'white',
        height: 35,
        marginTop: -30,
        width: '20%',
        alignSelf: 'flex-end',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceTxt: {
        fontWeight: 'medium',
        fontSize: 16,
        color: '#151515'
    },
    stackView: {
        marginTop: 5,
        borderRadius: 16,
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 157,
        width: '90%',
        marginStart: 5,
        marginRight: 5,
        borderRadius: 50
    },
    imageStackView: {
        flex: 0.5,
        borderRadius: 16,
        overflow: 'hidden'
    },
    getStartedBtn: {
        backgroundColor: 'blue',  // Button background color
        height: 50,               // Button height
        borderRadius: 10,         // Rounded corners
        alignItems: 'center',     // Center text horizontally
        justifyContent: 'center', // Center text vertically
        marginTop: 30,            // Add spacing from elements above
        marginBottom: 30,         // Add spacing from elements below
        width: '90%',             // Make button take 90% of the screen width
        alignSelf: 'center',      // Center the button within the screen
    }

});

export default DestinationScreen;