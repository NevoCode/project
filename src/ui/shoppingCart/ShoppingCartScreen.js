import React, { useContext, useState } from 'react'
import {View, Text} from 'react-native'
import { ShoppingCartContext } from '../../data/ShoppingCartContext';
import ShoppingItem from '../products_list/ShoppingItem';

const ShoppingCartScreen = () => {
    const shoppingCart = useContext(ShoppingCartContext);

    onQuantityChanged = (index ,quantity) => {
        if (quantity === 0){
            shoppingCart.removeProduct(index)
        } else {
            shoppingCart.updateItemQuantity(index, quantity)
        }
    }

    // updateTotal = () =>{
    //     const amount = 0
    //     shoppingCart.list.array.forEach(product => {
    //         amount += product.rawProductPrice
    //     });
    // }


    return (
        <View style={{alignItems: 'center'}}>
            <ProductsList
                style={{height: '95%'}}
                data={shoppingCart.list}
                renderItem={({item, index})=> <ShoppingItem index={index} item={item} onQuantityChanged={onQuantityChanged}/>}
            />
                <Text style={{flex: 1,alignSelf: 'center'}}>{shoppingCart.getTotalCartPrice()}</Text>
        </View>
    )
}

export default ShoppingCartScreen