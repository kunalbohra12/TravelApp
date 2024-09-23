import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Platform, ScrollView, Image, Alert, ImageBackground, Animated } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { images } from '../../../HelperFiles/Images/Images';
import PagerView from 'react-native-pager-view';
import Dots from 'react-native-dots-pagination';
import CustomListView from '../ListView/CustomListView';
import Loader from '../../../HelperFiles/Loader/CustomLoader';
import ExploreScreen from '../Explore/ExploreScreen';
import PlacesListView from '../ListView/PlacesList/PlacesListView';
const TripScreen = ({ navigation }) => {
const [categorylist,setCategoryList] = useState([]);
const [showLoader ,setShowLoader] = useState([]);
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
                console.log('dashboard API Call', dashboardData);
                const categoryListData = dashboardData.categorylist
                setCategoryList(categoryListData)
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
    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>

      <ExploreScreen/>
      <CustomListView/>
        </SafeAreaView >

    );
};
const styles = StyleSheet.create({
    safeAreaViewContainer:{
        flex:1
    }
});





export default TripScreen;

