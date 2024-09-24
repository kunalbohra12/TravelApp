import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, TextInput, map,TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Platform, ScrollView, Image, Alert, ImageBackground, Animated } from 'react-native';
import axios from 'axios';
import { images } from '../../../../HelperFiles/Images/Images';
import PagerView from 'react-native-pager-view';
import Dots from 'react-native-dots-pagination';
    

const PlacesListView = ({ productData }) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [currentPage, setCurrentPage] = useState(0); // State to track the current page
    
    const onPageSelected = (e) => {
        setCurrentPage(e.nativeEvent.position); // Update current page when swiped
    };
    const pageData = [
     {id:'1',placeTitle:'Japan',destinationImage:images.backImage,placeDescrptn:'The city setting is stunning with a rich architectural and historical heritage'},
     {id:'2',placeTitle:'Rome',destinationImage:images.backImage,placeDescrptn:'The city setting is stunning with a rich architectural and historical heritage'},
     {id:'3',placeTitle:'New York',destinationImage:images.backImage,placeDescrptn:'The city setting is stunning with a rich architectural and historical heritage'},
     {id:'4',placeTitle:'Paris',destinationImage:images.backImage,placeDescrptn:'The city setting is stunning with a rich architectural and historical heritage'},
     {id:'5',placeTitle:'Spain',destinationImage:images.backImage,placeDescrptn:'The city setting is stunning with a rich architectural and historical heritage'},
     {id:'6',placeTitle:'Thailand',destinationImage:images.backImage,placeDescrptn:'The city setting is stunning with a rich architectural and historical heritage'},
    ];

    return (
        <View style={{ flex: 1 }}>
        <PagerView style={styles.pagerView}
            initialPage={0}
            onPageScroll={onPageSelected}>
            {pageData.map((pageData) => (
                <View key={pageData.id} style={styles.page1}>
                    <ImageBackground
                        source={images.backImage} // Replace with the correct property for image URL
                        style={styles.backImage}
                    >
                        <View style={styles.headerView}>
                            <TouchableOpacity style={styles.menuBtn}>
                                <Image
                                    source={images.MenuIcon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuBtn}>
                                <Image
                                    source={images.SearchIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.placeTitle} >{pageData.placeTitle}</Text>
                        <Text style={styles.placeDescrptn} >{pageData.placeDescrptn}</Text>
                        <View style={styles.stackView}>
                            <TouchableOpacity style={styles.bookBtn}>
                                <Text style={{ color: 'white' }}>Book now</Text>
                            </TouchableOpacity>
                            <View style={styles.dotView}>
                                <Dots
                                    length={productData.length}                 // Total number of dots/pages
                                    active={currentPage}   // Current active page index
                                    activeColor='#FFCF4A'        // Active dot color
                                    passiveColor='gray'         // Inactive dot color
                                    marginHorizontal={2}        // Adjusts spacing between dots
                                    passiveDotWidth={10}         // Width of inactive dots
                                    activeDotWidth={10}         // Width of active dot
                                />
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            ))}
        </PagerView>
        <View style={{ height: 78,backgroundColor:'white' }}>
            <View style={styles.btnStackView}>
                <TouchableOpacity>
                    <View style={styles.tripOptionsBtn}>
                        <Image
                            source={images.HotelIcon}
                        />
                        <Text style={styles.title} >Hotels</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.tripOptionsBtn}>
                        <Image
                            source={images.FightIcon}
                        />
                        <Text style={styles.title} >Flight</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.tripOptionsBtn}>
                        <Image
                            source={images.TodoIcon}
                        />
                        <Text style={styles.title} >To do</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.tripOptionsBtn}>
                        <Image
                            source={images.AdventureIcon}
                        />
                        <Text style={styles.title} >Adventures</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>

    </View>
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
        height: 350,
        backgroundColor: 'black'
    },
    page1: {
        flex: 1,
        backgroundColor: 'white'
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
    stackView: {
        flexDirection: 'row',        // Aligns children in a row
        justifyContent: 'space-between', // Pushes the buttons to flex-start and flex-end
        alignItems: 'center',        // Vertically centers the items (optional)
        width: '85%',
        marginTop: 12,
        // marginHorizontal:24,
        marginLeft: 24,
        marginRight: 24,
        // backgroundColor:'black'
    },
    bookBtn: {
        height: 48,
        backgroundColor: '#167351',
        alignItems: 'center',
        borderRadius: 16,
        justifyContent: 'center',
        width: 150
    },
    dotView: {
        marginRight: 24
    },
    title: {
        color: '#151515',
        fontSize: 10,
        fontWeight: 'regular',
        // marginLeft:5,
        // marginRight:5
    },
    tripOptionsBtn: {
        width: 52,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 19
    },
    btnStackView: {
        width: '80%',
        marginLeft: 37,
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 50,
        marginTop: 15,
        marginHorizontal: 15,
        alignItems: 'center',
        alignSelf: 'center'
    },
});

export default PlacesListView;
