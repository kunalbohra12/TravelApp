
import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Platform, ScrollView, Image, Alert, ImageBackground, Animated } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import MenuIcon from '../../../assets'; // Adjust the path based on the new folder depth
const ExploreScreen = ({ navigation }) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [currentPage, setCurrentPage] = useState(0); // State to track the current page



    const renderImageList = ({ item }) => (
        <View style={styles.imageView}>
            <Image style={styles.image} source={item.destinationImages} />
        </View>
    );

    const onPageSelected = (e) => {
        setCurrentPage(e.nativeEvent.position); // Update current page when swiped
    };
 
    const pages = [
        { key: '0', tripImages: BackgroundImage, menuIcon: MenuIcon, searchIcon: SearchIcon,title:'Rome',placeDescrption:'The city setting is stunning with a rich architectural and historical heritage',buttonTitle:'Book Now'},
        { key: '1', tripImages: BackgroundImage, menuIcon: MenuIcon, searchIcon: SearchIcon,title:'Rome',placeDescrption:'The city setting is stunning with a rich architectural and historical heritage',buttonTitle:'Book Now'},
        { key: '2', tripImages: BackgroundImage, menuIcon: MenuIcon, searchIcon: SearchIcon,title:'Rome',placeDescrption:'The city setting is stunning with a rich architectural and historical heritage',buttonTitle:'Book Now'},
    ];

    return (

        // <SafeAreaView style={styles.safeAreaViewContainer}>
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                {/* <PagerView
                    style={styles.pagerView}
                    initialPage={0}
                    onPageScroll={onPageSelected} // Attach the event handler
                >
                    <View key="0" style={styles.page1}>
                        <ImageBackground
                            source={BackgroundImage}
                            style={styles.backImage}
                        >
                            <View style={styles.headerView}>
                                <TouchableOpacity style={styles.menuBtn}>
                                    <Image
                                        source={MenuIcon}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menuBtn}>
                                    <Image
                                        source={SearchIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.placeTitle} >Rome</Text>
                            <Text style={styles.placeDescrptn} >The city setting is stunning with a rich architectural and historical heritage</Text>
                            <TouchableOpacity style={styles.bookBtn}>
                                <Text style={{ color: 'white' }}>Book now</Text>
                            </TouchableOpacity>
                            <Dots
        
                            />
                        </ImageBackground>
                    </View>
                    <View key="1" style={styles.page2}>
                        <ImageBackground
                            source={BackgroundImage}
                            style={styles.backImage}
                        >
                            <View style={styles.headerView}>
                                <TouchableOpacity style={styles.menuBtn}>
                                    <Image
                                        source={MenuIcon}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menuBtn}>
                                    <Image
                                        source={SearchIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.placeTitle} >Rome</Text>
                            <Text style={styles.placeDescrptn} >The city setting is stunning with a rich architectural and historical heritage</Text>
                            <TouchableOpacity style={styles.bookBtn}>
                                <Text style={{ color: 'white' }}>Book now</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    <View key="2" style={styles.page3}>
                        <ImageBackground
                            source={BackgroundImage}
                            style={styles.backImage}
                        >
                            <View style={styles.headerView}>
                                <TouchableOpacity style={styles.menuBtn}>
                                    <Image
                                        source={MenuIcon}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menuBtn}>
                                    <Image
                                        source={SearchIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.placeTitle} >Rome</Text>
                            <Text style={styles.placeDescrptn} >The city setting is stunning with a rich architectural and historical heritage</Text>
                            <TouchableOpacity style={styles.bookBtn}>
                                <Text style={{ color: 'white' }}>Book now</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </PagerView> */}
                <PagerView style={styles.pagerView} 
                initialPage={0}
                 onPageScroll={onPageSelected}> 
                    {pages.map((page) => (
                        <View key={page.key} style={styles.page1}>
                            <ImageBackground
                                source={page.tripImages}
                                style={styles.backImage}
                            >
                                <View style={styles.headerView}>
                                <TouchableOpacity style={styles.menuBtn}>
                                    <Image
                                        source={page.menuIcon}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menuBtn}>
                                    <Image
                                        source={page.searchIcon}
                                    />
                                </TouchableOpacity>
                                </View>
                                <Text style={styles.placeTitle} >{page.title}</Text>
                                <Text style={styles.placeDescrptn} >{page.placeDescrption}</Text>
                                <View style={styles.stackView}>
                                <TouchableOpacity style={styles.bookBtn}>
                                <Text style={{ color: 'white' }}>{page.buttonTitle}</Text>
                                </TouchableOpacity>
                                <View style={styles.dotView}>
                                <Dots
                                    length={3}                 // Total number of dots/pages
                                    active={currentPage}   // Current active page index
                                    activeColor='#FFCF4A'        // Active dot color
                                    passiveColor='gray'         // Inactive dot color
                                    marginHorizontal={4}        // Adjusts spacing between dots
                                    passiveDotWidth={10}         // Width of inactive dots
                                    activeDotWidth={10}         // Width of active dot
                                />
                                </View>
                                
                                </View>
                             </ImageBackground>
                        </View>
                    ))}
                </PagerView>
            </View>

        </View>
        // </SafeAreaView >

    );
};




const styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    pagerView: {
        flex: 0.6,
        backgroundColor: 'black'
    },
    page1: {
        flex: 1,
        backgroundColor: 'darkblue'
    },
    headerView: {
        flexDirection: 'row',        // Aligns children in a row
        justifyContent: 'space-between', // Pushes the buttons to flex-start and flex-end
        alignItems: 'center',        // Vertically centers the items (optional)
        width: '90%',
        marginHorizontal: 20,
        marginTop: 16

    },
    menuBtn: {
        height: 24,
        width: 24,
        alignItems: 'flex-start',
        // marginLeft: -15,
    },
    placeTitle: {
        fontWeight: 'bold',
        fontSize: 28,
        marginTop: 127,
        color: 'white',
        marginLeft: 24
    },
    placeDescrptn: {
        fontSize: 16,
        fontWeight: 'medium',
        marginLeft: 24,
        marginTop: 0,
        color: 'white',
    },
    backImage: {
        flex: 1
    },
    stackView:{
        flexDirection: 'row',        // Aligns children in a row
        justifyContent: 'space-between', // Pushes the buttons to flex-start and flex-end
        alignItems: 'center',        // Vertically centers the items (optional)
        width: '85%',
        marginTop: 12,
        // marginHorizontal:24,
        marginLeft: 24,
        marginRight:24,
        backgroundColor:'black'
    },
    bookBtn: {
        height: 48,
        backgroundColor: '#167351',
        alignItems: 'center',
        borderRadius: 16,
        justifyContent: 'center',
        width: 150
    },
    dotView:{
        marginRight:24
    }
});

export default ExploreScreen;

