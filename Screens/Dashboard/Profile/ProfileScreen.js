import React, { useEffect } from 'react';
import { images } from '../../../HelperFiles/Images/Images';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, SafeAreaView, FlatList, Platform, ScrollView, Image, Alert, ImageBackground, Animated } from 'react-native';
const ProfileScreen = ({ navigation }) => {
    const [product, setProduct] = useState([]);
    const [categorylist, setCategoryList] = useState([]);
    const DetailsList = ({ title, subTitle }) => {
        return (
            <View style={{ height: 35, backgroundColor: 'white', marginBottom: 12 }}>
                <View style={{
                    height: 35, width: '100%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between',
                    borderBottomWidth: 1, borderBottomColor: '#D0D0D0'
                }}>
                    <Text style={{ marginLeft: 12, justifyContent: 'center', color: 'black', alignSelf: 'center', alignItems: 'center' }}>{title}</Text>
                    <Text style={{ marginRight: 12, alignSelf: 'flex-end', justifyContent: 'center', color: 'black', alignSelf: 'center', alignItems: 'center' }}>{subTitle}</Text>
                </View>
            </View>

        );
    }
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
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.headerView}>
                    <TouchableOpacity style={styles.backNavigationBtn}>
                        <Image source={images.LeftNavigationIcon} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', justifyContent: 'center', marginLeft: 88, alignItems: 'center' }}>Profile</Text>
                    <TouchableOpacity style={styles.editBtn}>
                        <Image source={images.EditIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.profileIconView}>
                    <Image
                        source={images.UserIcon}
                    />
                </View>
                <View style={styles.textView}>
                    <Text style={{
                        color: '#151515', fontWeight: 'medium', fontSize: 16
                    }}>Tanya Edwards</Text>
                    <Text style={{ color: 'black', fontWeight: 'regular', fontSize: 14 }}>San Francisco, CA</Text>
                </View>
                <View style={styles.userDetailsView}>
                    <DetailsList title={'Username'} subTitle={'MariotaJin'} />
                    <DetailsList title={'Username'} subTitle={'MariotaJin'} />
                    <DetailsList title={'Username'} subTitle={'MariotaJin'} />
                    <DetailsList title={'Username'} subTitle={'MariotaJin'} />
                    <DetailsList title={'Username'} subTitle={'MariotaJin'} />
                    <DetailsList title={'Username'} subTitle={'MariotaJin'} />

                </View>
                <View style={styles.signOutBtnView}>
                    <TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'medium' }}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >

        </View >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerView: {
        flexDirection: 'row',
        marginTop: 12,
        marginHorizontal: 20,
        height: 50,
        alignItems: 'center'
    },
    backNavigationBtn: {
        height: 24,
        width: 24,
        justifyContent: 'flex-start',
        alignContent: 'center'
    },
    editBtn:{
     height:24,
     width:24,
     alignItems:'center',
     alignSelf:'center',
     marginLeft: 100,
     justifyContent:'flex-end'
    },
    profileIconView: {
        height: 125,
        width: 125,
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: 29

    },
    userDetailsView: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 46,
        marginLeft: 11,
        marginRight: 12
    },
    signOutBtnView: {
     height:50,
     width:'90%',
     justifyContent:'center',
     backgroundColor:'#167351',
     borderRadius:16,
     marginTop:50,
     marginBottom:20,
     alignItems:'center',
     alignSelf:'center',
     borderStyle:'dotted',
     borderWidth:6,
     borderColor:'lightgreen'
    },
    textView: {
        alignSelf: 'center',
        marginTop: 16
    },
    signOutBtnTxt:{
    color: 'white', 
    fontSize: 16,
     fontWeight: 'medium'
     },
});
export default ProfileScreen;

