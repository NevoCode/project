import React, { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../data/ShoppingCartContext';
import ProductsList from '../products_list/ProductsList'
import ShoppingItem from '../products_list/ShoppingItem';

const ShoppingCart = () => {
    const shoppingCart = useContext(ShoppingCartContext);

    incrementItemQuantity = () => {

    }

    dectrementItemQuantity = () => {

    }

    getItemCartQuantity = () => {

    }

    updateCartItem = () => {

    }

    return (
        <ProductsList
            data={shoppingCart.list}
            renderItem={({item})=> ShoppingItem(item, onProductSelected, onQuantityChanged, getItemCartQuantity)}
        />
    )
}

export default ShoppingCart