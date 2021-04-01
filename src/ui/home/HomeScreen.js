import React, {useState, useEffect} from 'react';
import { Text, View, Button, StyleSheet, Image, FlatList } from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import {getUsers, getSuppliers, getProducts, getProductById} from '../../data/serviceApi';

const HomeScreen=()=> {
    const [selectedSupplier, setSelectedSupplier] = useState({})
    const [suppliersList, setSuppliersList] = useState([])
    const [productsList, setProductsList] = useState([])

    useEffect(()=> {
      // getUsers()
      getSuppliers()
      getProducts()
      // getProductById(1)
    }, [])

    renderHeader=()=>{
      return <View style={styles.header}></View>
    }

    return (
      <View style={styles.container}>
        {renderHeader()}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    marginTop: 8,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default HomeScreen;