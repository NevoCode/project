
import React from 'react';
import ProductItem from "./ProductItem"
import { FlatList, StyleSheet } from 'react-native';

export default ProductsList=({data, onProductSelected})=>{
    return <FlatList 
        style={styles.list}
        data={data}
        renderItem={({item})=> ProductItem(item, onProductSelected)}
        keyExtractor={item => item.id}
    />
}

const styles = StyleSheet.create({
    list: {
      width: '90%%'
    },
  });