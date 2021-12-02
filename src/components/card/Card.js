import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function Card({product}) {
  return (
    <View style={styles.cardContainer}>
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image source={{uri: product.imgURL}} style={styles.image} />
      </View>
      {/* Title && Price */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}> {product.title} </Text>
        <Text style={styles.price}> {product.price} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ededf2',
    width: (w * 0.5) / 1.04,
    minHeight: h * 0.3,
    borderRadius: 10,
    marginBottom: 5,
    marginLeft: 5,
  },
  imageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 10,
  },
  image: {
    width: w * 0.3,
    height: h * 0.2,
    resizeMode: 'contain',
  },
  titleContainer: {
    flex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#6a6a6b',
  },
});
