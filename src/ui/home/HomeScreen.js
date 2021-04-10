import React, {useState, useEffect} from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import {getUsers, getSuppliers, getProducts, getProductsBySupplierId} from '../../data/serviceApi';
import SuppliersPicker from '../components/SuppliersPicker';
import ProductsList from '../products_list/ProductsList';

const HomeScreen=()=> {
    // const [selectedSupplier, setSelectedSupplier] = useState()
    const [suppliersList, setSuppliersList] = useState([])
    const [productsList, setProductsList] = useState([])

    useEffect(()=> {
      getSuppliers().then(setSuppliersList)
      getProducts().then(setProductsList)
    }, [])

    renderHeader=()=>{
      return <SuppliersPicker 
                items={suppliersList}
                onItemSelected={(supplierId)=>{
                  getProductsBySupplierId(supplierId).then(setProductsList)
                }
                }
              />
    }

    renderContent=()=>{
      return <View style={styles.content}>
        <ProductsList
          data={productsList}
          onProductSelected={onProductSelected}
        />
      </View>
    }

    onProductSelected=(item)=>{
      console.log("onProductSelected: " + item.rawProductName)
    }

    return (
      <View style={styles.container}>
        {/* {renderHeader()} */}
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
    height: '20%',
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