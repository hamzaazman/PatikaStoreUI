import React from 'react';
import {View, Text, TextInput,StyleSheet, FlatList} from 'react-native';
import ProductCard from './src/ProductCard/ProductCard';
import Search from './src/Search/Search';
const App = () => {
  return (
    <View>   
        <Text style={styles.header}>
          PatikaStore
        </Text>
        
        <ProductCard/>
    </View>

  );
};

const styles = StyleSheet.create({
  header:{
    fontSize:30,
    fontWeight:'bold',
    color:'#481f7d',
    padding:5,
  }
  
})


export default App;