import React, { useState, useEffect, useContext } from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { ORDER_TYPE, ShoppingCartContext } from '../../data/ShoppingCartContext';
import { getUsers, getSuppliers, getProducts, getProductsBySupplierId, getBranches } from '../../data/serviceApi';
import SuppliersPicker from '../components/SuppliersPicker';
import ProductsList from '../products_list/ProductsList';
import ProductItem from '../products_list/ProductItem';
import { Container, Picker, Switch } from 'native-base';

const HomeScreen = ({route}) => {
  const shoppingCart = useContext(ShoppingCartContext);
  const navigation = useNavigation()

  const [suppliersList, setSuppliersList] = useState([])
  const [productsList, setProductsList] = useState([])
  const [branchesList, setBranchesList] = useState([])
  const [orderType, setOrderType] = useState(ORDER_TYPE.SUPPLIER)
  const [selectedSupplierId, setSelectedSupplierId] = useState(0)

  useEffect(() => { //Constructor
    getSuppliers().then((sList) => {
      setSuppliersList(sList)
      getProductsBySupplierId(sList[selectedSupplierId].supplierId).then(setProductsList)
    })
    getBranches().then(setBranchesList)
  }, [])

  renderDropdownItems=()=>{
    switch (orderType) {
      case ORDER_TYPE.SUPPLIER:
        return suppliersList.map((item, index) => <Picker.Item key={index} label={item.contactName} value={item.supplierId}/>);
      case ORDER_TYPE.BRACH:
        return branchesList.map((item, index) => <Picker.Item key={index} label={item.branchName} value={item.branchId}/>)
      default: return []
    }
  }

  onItemSelected=(supplierId)=>{
      if (orderType === ORDER_TYPE.SUPPLIER){
        setSelectedSupplierId(supplierId)
        getProductsBySupplierId(supplierId).then(setProductsList)
    }
  }

  getOrderTypeText=()=>{
    const isSupplier = orderType === ORDER_TYPE.SUPPLIER
    const color = isSupplier ? "green" : "purple"
    const string = !isSupplier ? "סניפים" : "ספקים"
    return <Text style={{fontSize: 16, color: color}}>{string}</Text>
  }

  loadProducts=()=>{
    console.log("loadProducts: " + orderType)
    if (orderType === ORDER_TYPE.BRACH){
      getProducts().then(setProductsList)
    } else if (orderType === ORDER_TYPE.SUPPLIER){
      getProductsBySupplierId(selectedSupplierId).then(setProductsList)
    }
  }

  getOrderTypeFromSwith=(isTrue)=>{
    if (isTrue){
      return ORDER_TYPE.SUPPLIER
    } else {
      return ORDER_TYPE.BRACH
    }
  }

  onOrderTypeChanged=(newValue)=>{
    setOrderType(getOrderTypeFromSwith(newValue))
    console.log("This is it: " + getOrderTypeFromSwith(newValue))
    // setProductsList([])
    loadProducts()
    // setTimeout(2000, ()=> loadProducts()) 
  }

  renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <SuppliersPicker
          style={styles.header}
          defultValue={selectedSupplierId}
          renderItems={renderDropdownItems()}
          onItemSelected={onItemSelected}
        />
        {getOrderTypeText()}
        { <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={'#f4f3f4'}
          onValueChange={onOrderTypeChanged}
          value={orderType === ORDER_TYPE.SUPPLIER}
        /> }
      </View>
    )
  }

  renderContent = () => {
    return (
      <View style={styles.content}>
        <ProductsList
          data={productsList}
          renderItem={({item})=> ProductItem(item, onProductSelected, onQuantityChanged, shoppingCart.isProductExists(item))}
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
  headerContainer: {
    height: '10%',
    flexDirection: 'row-reverse',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  header: {
    height: '100%',
    color: 'black'
  },
  content: {
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
});

export default HomeScreen;