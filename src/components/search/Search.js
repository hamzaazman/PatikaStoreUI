import React from 'react';
import {View,TextInput, StyleSheet} from 'react-native';

export default function Search() {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#000000"
        style={styles.searchInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#ededf2',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
});
