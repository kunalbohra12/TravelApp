import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, SafeAreaView, FlatList, Platform, ScrollView, Image, Alert, ImageBackground, Animated } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { images } from '../../../HelperFiles/Images/Images';
import PagerView from 'react-native-pager-view';
import Dots from 'react-native-dots-pagination';
import CustomListView from '../ListView/CustomListView';
import PlacesListView from '../ListView/PlacesList/PlacesListView';
import LottieView from 'lottie-react-native';
const ExploreScreen = ({ navigation }) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [currentPage, setCurrentPage] = useState(0); // State to track the current page
    const [showLoader, setShowLoader] = useState(false);
    const [product, setProduct] = useState([]);
    const [categorylist, setCategoryList] = useState([]);

    useEffect(() => {
        dashBoardAPI();
        console.log("dashBoard API Call");
    }, []);

    const renderImageList = ({ item }) => (
        <View style={styles.imageView}>
            <Image style={styles.image} source={item.destinationImages} />
        </View>
    );
    const onPageSelected = (e) => {
        setCurrentPage(e.nativeEvent.position); // Update current page when swiped
    };
    const dashBoardAPI = async (data) => {
        setShowLoader(true);
        { showLoader && <Loader size="large" color="blue" /> }
        try {
            //   console.log('Form data:', data);
            // API endpoint
            const response = await axios.post(
                'http://3.144.131.203/ecommerce-web/public/api/dashboard',
            );
            const dashboardData = response.data.data

            if (response.data.success) {
                // console.log('dashboard API Call', dashboardData);
                const topProduct = dashboardData.topsellingproduct
                const categoryProductList = dashboardData.categorylist
                setProduct(topProduct)
                setCategoryList(categoryProductList)
            } else {
                console.log('dashboard API Failed');
            }
        } catch (error) {
            console.error('Error sending data:', error.response ? error.response.data : error.message);
        }
        finally {
            // Hide loader after the login process finishes, either success or failure
            setShowLoader(false);
        }

    };
    const renderItem1 = ({ item }) => (
        <View key={item.id} style={styles.itemContainer}>
            <ImageBackground
                source={{ uri: item.image }}  // Use item.image for the image source
                style={styles.imageBackground}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            </ImageBackground>
        </View>
    );
    const renderItem2 = ({ item }) => (
        <View key={item.id} style={styles.placeListContainer}>
            <ImageBackground
                style={styles.placeimageBackground}
                source={{ uri: item.image }}
            >
            </ImageBackground>
            <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 'regular', fontSize: 12, marginLeft: 0, marginRight: 23 }}>{item.description}</Text>
                <Text>{item.name}</Text>

            </View>
        </View>
    );
    return (
        // <SafeAreaView style={styles.safeAreaViewContainer}>
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}>
                <PlacesListView productData={product} />
                {showLoader ? ( // Show loader while fetching data
                    <View style={styles.loaderContainer}>
                           <ActivityIndicator size="large" color={'#167351'}/>
                       </View>
                ) : (
                    <>
                        <CustomListView productData={product} renderItem={renderItem1} listTitle={'Popular Products'} />
                    </>

                )}
            </ScrollView>
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
    itemContainer: {
        width: 200, // Width of each item
        height: 130,
        marginRight: 12, // Space between items
        backgroundColor: 'white',
        borderRadius: 16,
        overflow: 'hidden',
        marginTop: 20
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    imageStyle: {
        borderRadius: 16, // Add border radius to image itself
    },
    textContainer: {
        height: 24,
        width: 90,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 8,
        left: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'left',
        paddingBottom: 4
    },
    placeListContainer: {
        width: 148, // Width of each item
        height: 309,
        marginRight: 12, // Space between items
        backgroundColor: 'white',
        marginTop: 20,
    },
    placeimageBackground: {
        width: '100%',
        height: 250,
        backgroundColor: 'black',
        resizeMode: 'cover',
        borderRadius: 16,
        overflow: 'hidden',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      },
});

export default ExploreScreen;

