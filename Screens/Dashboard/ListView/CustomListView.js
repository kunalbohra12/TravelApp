import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity, Touchable, ImageBackground } from 'react-native';
import { images } from '../../../HelperFiles/Images/Images';
const CustomListView = () => {
    const data = [
        { id: '1', destinationImages: images.ThailandIcon },
        { id: '2', destinationImages: images.ThailandIcon },
        { id: '3', destinationImages: images.ThailandIcon },
        { id: '4', destinationImages: images.ThailandIcon },
        { id: '5', destinationImages: images.ThailandIcon },
        { id: '6', destinationImages: images.ThailandIcon },
        { id: '6', destinationImages: images.ThailandIcon },
        { id: '6', destinationImages: images.ThailandIcon },
        { id: '6', destinationImages: images.ThailandIcon },
        { id: '6', destinationImages: images.ThailandIcon },
        { id: '6', destinationImages: images.ThailandIcon },
        { id: '6', destinationImages: images.ThailandIcon },
 
    ];

    // Render each item in the FlatList
    const renderItem = ({ item }) => (
        <View style={{ width: '100%', backgroundColor: 'white', height: 130, marginTop: 12,marginLeft:12}}>
            <ImageBackground
                source={images.ThailandIcon}
                style={{ height: 130, width: 202, borderRadius: 16, overflow: "hidden" }}
            >
                <View style={{ height: 24, width: 90, backgroundColor: 'white', position: 'absolute', bottom: 8, marginLeft: 10, borderRadius: 8 }}>
                    <Text style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>Thailand</Text>
                </View>
            </ImageBackground>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={{
                alignItems: 'center', justifyContent: 'center', width: 195, backgroundColor: '#167351', overflow: 'hidden', height: 34, marginTop: 41, borderTopRightRadius: 16, borderBottomRightRadius: 16
            }}>
                <Text style={{ color: 'white', padding: 4 }}>Popular destination </Text>
            </View>
            <View style={styles.flatContainer}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    horizontal={false}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    style={{flex:1}}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
        container: {
          flex: 1,  // Ensure the parent view takes full height
        },
        flatContainer: {
          flex: 1,  // Ensures FlatList container takes full available space
        },
        listContent: {
          paddingHorizontal: 16,  // Optional: You can adjust padding here
        },  
});

export default CustomListView;
