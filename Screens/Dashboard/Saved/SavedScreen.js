import React, { useEffect } from 'react';
import { images } from '../../../HelperFiles/Images/Images';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, SafeAreaView, FlatList, Platform, ScrollView, Image, Alert, ImageBackground, Animated } from 'react-native';
import PlacesListView from '../ListView/PlacesList/PlacesListView';
import HotelListView from '../ListView/HotelList/HotelListView';
const SavedScreen = ({ navigation }) => {
    const[premiumProduct,setPremiumProduct] = useState([]);
   const SavedPlaces = ({}) => {
    return(
        <View style={{flex:1}}>
    
        {/* {discountProductData.map((discountProductData) => ( */}
      <View style={{borderRadius:16,overflow:'hidden',elevation:0.4,marginLeft:12,flexDirection:'row',width:'100%',height:165,marginBottom:20,backgroundColor:'white',marginTop:22}}>
         <Image 
          style={{width:168,height:165,backgroundColor:'black',borderRadius:16}}
          source={images.PlaceIcon}
         />
         <View style={{height:165,marginLeft:2,backgroundColor:'white',width:'100%'}}>
            <Text style={{marginTop:12,marginLeft:30,marginRight:25,color:'#151515',fontSize:16,fontWeight:'medium'}}>Trip to</Text>
            <Text style={{marginLeft:15,fontSize:22,fontWeight:'bold'}}> Japan</Text> 
            <Text style={{marginLeft:15,fontSize:14,marginTop:4,fontWeight:'regular'}}> $120 /per night</Text> 
            <TouchableOpacity style={{height:36,width:'35%',alignSelf:'flex-start',alignItems:'center',backgroundColor:'#167351',justifyContent:'center',marginLeft:20,borderRadius:8,marginTop:16}}>
             <Text style={{color:'white',fontSize:14,fontWeight:'medium'}}>View Details</Text>
            </TouchableOpacity>
         </View>
       {/* ))} */}
        </View>
        {/* ))} */}
       </View>
     );
   };0

    return (
        <View style={styles.container}>
           <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:50}}>

            <Text style={styles.screenTitle}>Saved</Text>
            <Text style={{marginTop:12,marginLeft:12,fontWeight:'medium',fontSize:22}}>Places</Text>
            <SavedPlaces/>
            <SavedPlaces/>
            <SavedPlaces/>
            <SavedPlaces/>
            <SavedPlaces/>
            <SavedPlaces/>
            <SavedPlaces/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    screenTitle: {
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        fontSize: 23,
        marginTop: 23,
        justifyContent: 'center'
    },
    savedPlacesView:{
        flex:1,
        backgroundColor:'black'
    }

});
export default SavedScreen;

