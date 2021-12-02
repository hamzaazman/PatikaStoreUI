import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import product from './product_list.json';
import Card from './src/components/card/Card';
import Header from './src/components/header/Header';
import Search from './src/components/search/Search';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Products */}
      <FlatList
        ListHeaderComponent={<Search />}
        data={product}
        numColumns={2}
        renderItem={({item}) => <Card product={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
