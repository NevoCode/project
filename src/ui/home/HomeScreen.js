import React, { useState, useEffect, useContext } from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { ShoppingCartContext } from '../../data/ShoppingCartContext';
import { getUsers, getSuppliers, getProducts, getProductsBySupplierId } from '../../data/serviceApi';
import SuppliersPicker from '../components/SuppliersPicker';
import ProductsList from '../products_list/ProductsList';
import ProductItem from '../products_list/ProductItem';

const HomeScreen = () => {
  const shoppingCart = useContext(ShoppingCartContext);

  const [suppliersList, setSuppliersList] = useState([])
  const [productsList, setProductsList] = useState([])
  const [cart, setCart] = useState([]) //[{name, quantity}]

  useEffect(() => { //Constructor
    getSuppliers().then(setSuppliersList)
    getProducts().then(setProductsList)
  }, [])

  updateCartItem = (itemName, quantity) => {
    const newList = [{ name: itemName, quantity: quantity }]
    setCart([...cart, ...newList])
    console.log("cart: " + JSON.stringify(cart))
  }

  getItemCartQuantity = (itemName) => {
    // for (item in cart){
    //   console.log("item: " + JSON.stringify(item))
    //     if (item.name === itemName){
    //         return item.quantity
    //     }
    // }
    return 0
  }

  renderHeader = () => {
    return (
      <SuppliersPicker
        style={styles.header}
        items={suppliersList}
        onItemSelected={(supplierId) => {
          getProductsBySupplierId(supplierId).then(setProductsList)
        }
        }
      />
    )
  }

  renderContent = () => {
    return (
      <View style={styles.content}>
        <ProductsList
          data={productsList}
          renderItem={({item})=> ProductItem(item, onProductSelected, onQuantityChanged, getItemCartQuantity)}
        />
      </View>
    )
  }

  onProductSelected = (item) => {
    console.log("onProductSelected: " + item.rawProductName)
    shoppingCart.addProduct(item)
  }

  onQuantityChanged = (item, quantity) => {
    console.log("onQuantityChanged: " + item.rawProductName + " --> " + quantity)
  }


  //TODO: handle Header (Picker) Height
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
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
});

export default HomeScreen;