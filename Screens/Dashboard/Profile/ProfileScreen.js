import React, { useEffect } from 'react';
import { images } from '../../../HelperFiles/Images/Images';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, SafeAreaView, FlatList, Platform, ScrollView, Image, Alert, ImageBackground, Animated } from 'react-native';
const ProfileScreen = ({ navigation }) => {

    // const DetailsList = ({ }) => {
    //     return (
    //         <View style={{flex:1,marginTop:46}}>
    //         <View style={{flex:0,backgroundColor:'blue'}}>
                
    //                 <View style={{ height: 1, backgroundColor: '#151515' }}></View>
    //             </View>
    //         </View>
    //         </View>
    //     );
    // }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={{ flexDirection: 'row', marginTop: 12, marginHorizontal: 20, height: 50, alignItems: 'center' }}>
                <TouchableOpacity style={styles.backNavigationBtn}>
                    <Image source={images.LeftNavigationIcon} />
                </TouchableOpacity>
                <Text style={{ fontSize: 28, fontWeight: 'bold', justifyContent: 'center', marginLeft: 88, alignItems: 'center' }}>Profile</Text>
                <TouchableOpacity style={[styles.backNavigationBtn, { marginLeft: 100, justifyContent: 'flex-end', alignItems: 'center' }]}>
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
            {/* <DetailsList />
            <DetailsList />
            <DetailsList />
            <DetailsList /> */}
            </ScrollView>

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
    textView: {
        alignSelf: 'center',
        marginTop: 16
    }
});
export default ProfileScreen;

