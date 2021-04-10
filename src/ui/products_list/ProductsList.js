
import React, { useState } from 'react';
import ProductItem from "./ProductItem"
import { FlatList, StyleSheet } from 'react-native';

export default ProductsList=({data, onProductSelected, onQuantityChanged, getItemCartQuantity})=>{
    // const [quantity, setQuantity] = useState()

    return <FlatList 
        style={styles.list}
        data={data}
        renderItem={({item})=> ProductItem(item, onProductSelected, onQuantityChanged, getItemCartQuantity)}
        keyExtractor={item => item.id}
    />
}

const styles = StyleSheet.create({
    list: {
      width: '90%'
    },
  });