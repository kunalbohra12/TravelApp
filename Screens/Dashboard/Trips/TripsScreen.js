import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator,TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Platform, ScrollView, Image, Alert, ImageBackground, Animated } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { images } from '../../../HelperFiles/Images/Images';
import PagerView from 'react-native-pager-view';
import Dots from 'react-native-dots-pagination';
import CustomListView from '../ListView/CustomListView';
import Loader from '../../../HelperFiles/Loader/CustomLoader';
import ExploreScreen from '../Explore/ExploreScreen';
import PlacesListView from '../ListView/PlacesList/PlacesListView';
import HotelListView from '../ListView/HotelList/HotelListView';
const TripScreen = ({ navigation }) => {
const [showLoader ,setShowLoader] = useState([]);
const [categoryList,setCategoryList] = useState([]);
const [discountProductList,setDiscountProductList] = useState([]);
    useEffect(() => {
        setShowLoader(true);
        { showLoader && <Loader size="large" color="blue" /> }
        dashBoardAPI();
        console.log("dashBoard API Call");
    }, []);
    const dashBoardAPI = async (data) => {
        setShowLoader(true);
        try {
            //   console.log('Form data:', data);
            // API endpoint
            const response = await axios.post(
                'http://3.144.131.203/ecommerce-web/public/api/dashboard',
            );
            const dashboardData = response.data.data
            if (response.data.success) {
                // console.log('dashboard API Call', dashboardData);
                const categoryListData = dashboardData.categorylist
                const discountProductList = dashboardData.discountedproduct
                setCategoryList(categoryListData)
                console.log('dashboard API Call', discountProductList);

                setDiscountProductList(discountProductList)
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
         source={{uri:item.image}}
        >
        </ImageBackground>
        <View style={{flex:1}}>
            <Text style={{fontWeight:'regular',fontSize:12,marginLeft:0,marginRight:23}}>{item.description}</Text>
            <Text>{item.name}</Text>

        </View>
      </View>
      );

    return (
        <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:60}}> 
        <PlacesListView productData={categoryList}/> 
        {showLoader ? ( // Show loader while fetching data
        <View style={styles.loaderContainer}>
            <ActivityIndicator size='large' color="#167351" />
          </View>
        ) : (
            <>
         <HotelListView discountProductData={discountProductList} listTitle={'Hotel Best Deals'} />
         </>
     )}
          </ScrollView>
        </View >

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
        height:  250,
        backgroundColor: 'black',
        resizeMode:'cover',
        borderRadius: 16,
        overflow:'hidden',
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
    textContainer: {
        height: 24,
        width: 90,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 10,
        left: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        textAlign:'center',
        paddingBottom:4
    }
});
 




export default TripScreen;

