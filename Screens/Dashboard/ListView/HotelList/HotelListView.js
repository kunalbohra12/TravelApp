import React from 'react';
import { View, FlatList, Text, ImageBackground,Image, StyleSheet,RefreshControl,onRefresh,refreshing } from 'react-native';
import { images } from '../../../../HelperFiles/Images/Images';

const HotelListView = ({ discountProductData, listTitle}) => {
 
    console.log('discountProductDatalist  is :', discountProductData)
  const HotelDeals = () => {
   return(
    <View style={{flex:1}}>
    
     {discountProductData.map((discountProductData) => (
   <View key={discountProductData.id}style={{flexDirection:'row',alignSelf:'flex-end',width:'95%',height:100,marginBottom:20,borderTopLeftRadius:16,borderBottomLeftRadius:16,overflow:'hidden',backgroundColor:'#167351'}}>
      <Image 
       style={{width:158,height:100,backgroundColor:'black',overlayColor:'red'}}
       source={{uri:discountProductData.image}}
      />
      <View style={{width:'100%',height:91,backgroundColor:'#167351'}}>
     <Text style={{marginTop:9,marginLeft:17,color:'white',fontWeight:'medium',fontSize:16}}>{discountProductData.discount_type}</Text>
      <View style={{marginTop:8,marginLeft:17,height:20,width:'100%',flexDirection:'row'}}>
        <Image style={{marginLeft:2}} source={images.RatingIcon}/>
        <Image style={{marginLeft:2}} source={images.RatingIcon}/>
        <Image style={{marginLeft:2}} source={images.RatingIcon}/>
        <Image style={{marginLeft:2}} source={images.RatingIcon}/>
        <Image style={{marginLeft:2}} source={images.RatingIcon}/>
      </View>
      <Text style={{marginTop:8,marginLeft:17,color:'white',fontWeight:'medium',fontSize:16}} >{discountProductData.selling_price}/<Text style={{color:'white',fontSize:10}}>per Night</Text></Text>
      </View>
    {/* ))} */}
     </View>
     ))}
    </View>
     
   );
  }


    return (
        <View style={styles.container}>
            <View style={{
                alignItems: 'center', justifyContent: 'center', width: 195, backgroundColor: '#167351', overflow: 'hidden', height: 34,marginLeft:0, marginTop: 41, borderTopRightRadius: 16, borderBottomRightRadius: 16
            }}>
                <Text style={{ color: 'white', padding: 4 }}>{listTitle}</Text>
            </View>
            <View style={styles.flatContainer}>
                <FlatList
                    data={discountProductData} // Ensure imagesURL is an array
                    renderItem={HotelDeals}
                    horizontal={false}
                    keyExtractor={(item) => item.id}
                    refreshControl={
                        <RefreshControl
                          refreshing={refreshing}   // Control the spinner
                          onRefresh={onRefresh}     // Pull-to-refresh action
                          colors={['#0000ff']}      // Spinner color
                        />
                      }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                />
            </View>
            
        </View>
    );  
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Parent container takes full height
        backgroundColor:'white'
    },
    flatContainer: {
        flex: 1, // Ensure FlatList container takes full space
        backgroundColor:'white'
    },
    listContent: {
        paddingTop: 35, // Adjust padding if needed
        backgroundColor:'white'
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
        paddingBottom:4
    },
});

export default HotelListView;
