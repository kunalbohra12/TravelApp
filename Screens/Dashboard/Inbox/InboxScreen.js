import React, { useEffect } from 'react';
import { images } from '../../../HelperFiles/Images/Images';
import { useState } from 'react';
import PlacesListView from '../ListView/PlacesList/PlacesListView';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, SafeAreaView, FlatList, Platform, ScrollView, Image, Alert, ImageBackground, Animated } from 'react-native';
const InboxScreen = ({ navigation }) => {
   const [productList,setProduct] = useState([]);
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
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <PlacesListView productData={productList} />
            <Text style={{ color: 'black', fontSize: 28, fontWeight: 'bold', alignItems: 'center', alignSelf: 'center' }}>Inbox Screen</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    backNavigationBtn: {
        height: 24,
        width: 24,
        justifyContent: 'flex-start',
        alignContent: 'center'
    },
    profileIconView: {
        height: 125,
        width: 125,
        borderRadius: 60,
        alignSelf: 'center',

    },
    text: {
        alignSelf: 'center',
        marginTop: 16
    }
});
export default InboxScreen;

