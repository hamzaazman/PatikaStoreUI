import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native';

const Search = () => {
    return(
        <TextInput
        style={styles.input}
        placeholder='Ara...'
      />
    );
}

const styles = StyleSheet.create({
    input:{
        padding:5,
        margin:5,
        fontSize:15,
        borderRadius:5,
        backgroundColor:'#e8e8e8'

    }
});


export default Search;