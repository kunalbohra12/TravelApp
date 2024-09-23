import React from 'react';
import { View, FlatList, Text, ImageBackground, StyleSheet } from 'react-native';

const PlacesListView = ({ productData }) => {
   
    console.log('Category Data is :', productData)

    const renderItem = ({ item }) => (
        <View key={item.id} style={styles.itemContainer}>
          <ImageBackground
            source={{ uri: item.image }}  // Use item.image for the image source
            style={styles.imageBackground}
            imageStyle={styles.imageStyle}
          >
          </ImageBackground>
          <View style={styles.textContainer}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
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
                    data={productData} // Ensure imagesURL is an array
                    renderItem={renderItem}
                    horizontal={true}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                />
            </View>
        </View>
    );  
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Parent container takes full height
    },
    flatContainer: {
        flex: 1, // Ensure FlatList container takes full space
    },
    listContent: {
        paddingHorizontal: 16, // Adjust padding if needed
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

export default PlacesListView;
