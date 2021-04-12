
import React, { useState } from 'react';
import ProductItem from "./ProductItem"
import { FlatList, StyleSheet } from 'react-native';

export default ProductsList=({data, renderItem})=>{
  console.log("ProductsList: " + data.length)
    // const [quantity, setQuantity] = useState()

    return <FlatList 
        style={styles.list}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
    />

    
}

const styles = StyleSheet.create({
    list: {
      width: '90%'
    },
  });