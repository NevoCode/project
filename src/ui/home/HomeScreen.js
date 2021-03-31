import React, {useState, useEffect} from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

const HomeScreen=()=> {
    const [selectedSupplier, setSelectedSupplier] = useState({})
    const [suppliersList, setSuppliersList] = useState([])
    const [productsList, setProductsList] = useState([])

    useEffect(()=> {
        // getSuppliers()
        getMoviesFromApi()
    }, [])

    fetchSuppliers=async()=>{
        var json;
        try {
            json = await fetch('https://google.com', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    str,
                  }),
            });
        } catch(e){
            console.log("XXX json Error: " + e)

        }

        console.log("XXX json: " + await json.json().toString())
        return []
    }

    fetchProducts=async()=>{
        return []
    }

    getProducts=async()=>{
        var list = await fetchProducts()

        if (list.length == 0) return
        setProductsList(list)
    }

    getSuppliers=async()=>{
        var list = await fetchSuppliers()

        if (list.length == 0) return
        setProductsList(list)
    }

    async function getMoviesFromApi() {
        try {
        let response = await fetch('https://proj.ruppin.ac.il/bgroup16/test2/api/suppliers/GetSuppliers');
          let responseJson = await response.json();
          console.log("XXX : GetSuppliers : " + JSON.stringify(responseJson[0]))
          setSuppliersList(responseJson)
          setSelectedSupplier(responseJson[0])
          return responseJson;
        } catch (error) {
          console.error(error);
        }
      }

    return (
      <View style={styles.container}>
        <Button onPress={()=> getProducts()} title="Refetch" />
        <Text style={styles.paragraph}>{selectedSupplier.contactName || "Please select supplier"}</Text>
        <Text style={styles.paragraph}>{JSON.stringify(selectedSupplier.supplierId) || "Please select supplier"}</Text>
        <Image
        style={styles.logo}
        source={{
          uri: selectedSupplier.supplierPicture,
        }}
      />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
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