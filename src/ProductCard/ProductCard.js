import React from "react";
import {FlatList,GridList,View,Text,Image, StyleSheet, Dimensions, SafeAreaView} from "react-native";
import product_list from '../../product_list.json';
import Search from "../Search/Search";

const ProductCard = ({product}) => {
    return (
        <SafeAreaView>
            <View>
                <FlatList
                    ListHeaderComponent={() => (
                        <Search/>
                    )}
                    numColumns={2}
                    data={product_list}
                    renderItem={({item}) =>  <Card product={item}/>}
                />
            </View>
        </SafeAreaView>
    );
};
const Card = ({product})=>{
    return(
        <SafeAreaView style={styles.container}>
            <View  style={styles.image_container}>
            
                <Image resizeMode="contain" style={styles.image} source={{uri: product.imgURL}}/>
            </View>
            <View style={styles.text_container}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e8e8e8',
        width:'45%',
        margin:5,
        padding:5,
        borderRadius:5,
        flex: 1,
        justifyContent:"space-between",        
    },
    image_container:{
        flex:2,
        alignItems:"center",
        padding:5,
        margin:5,
        borderRadius:5,
       backgroundColor: 'white',
    },
    text_container:{
        
    }, 
    image:{
       height:Dimensions.get('window').height / 5.3,
       width:'100%',
       padding:5,   
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:5,
        paddingTop:5,
    },
    price:{
        padding:5,
        fontWeight:'bold',
        color:'#6c757d',
        fontSize:15
    },

})


export default ProductCard;