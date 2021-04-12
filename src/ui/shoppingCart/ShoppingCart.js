import React, { useState } from 'react'
import ProductsList from '../products_list/ProductsList'

const ShoppingCart=()=>{
    const [cartList, setCartList] = useState([])

    incrementItemQuantity=()=>{

    }

    dectrementItemQuantity=()=>{

    }

    getItemCartQuantity=()=>{

    }

    updateCartItem=()=>{

    }

    return(
        <ProductsList
            data={cartList}
            getItemCartQuantity={getItemCartQuantity}
            onQuantityChanged={updateCartItem}
      />
    )
}

export default ShoppingCart