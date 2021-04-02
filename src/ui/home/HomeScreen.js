import React, {useState, useEffect} from 'react';
import { Text, View, Button, StyleSheet, Image, FlatList } from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import {getUsers, getSuppliers, getProducts, getProductById} from '../../data/serviceApi';

const HomeScreen=()=> {
    const [selectedSupplier, setSelectedSupplier] = useState({})
    const [suppliersList, setSuppliersList] = useState([])
    const [productsList, setProductsList] = useState([])

    useEffect(()=> {
      getSuppliers().then(setSuppliersList)
      getProducts().then(setProductsList)
      // getProductById(1)
    }, [])

    renderHeader=()=>{
      return <View style={styles.header}></View>
    }

    renderContent=()=>{
      return <View style={styles.content}>
        <FlatList 
          style={styles.list}
          data={suppliersList} 
          renderItem={({item})=> <Text>{item.contactName}</Text>}
          keyExtractor={item => item.id}
          />
        <FlatList 
          style={styles.list}
          data={productsList} 
          renderItem={({item})=> <Text>{item.rawProductName}</Text>}
          keyExtractor={item => item.id}
          />
      </View>
    }

    return (
      <View style={styles.container}>
        {renderHeader()}
        {renderContent()}
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
    backgroundColor: '#F0F0F0'
  },
  content: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center'
  },
  paragraph: {
    marginTop: 8,
  },
  logo: {
    width: 66,
    height: 58,
  },
  list: {
    flex: 1
  },
});

export default HomeScreen;