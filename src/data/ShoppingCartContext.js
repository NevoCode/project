import React, {createContext, Component} from 'react';

export const ShoppingCartContext = createContext();

class ShoppingCartContextProvider extends Component {
  state = {
    list: [],
  };

  addProduct=(product)=>{
    console.log("addProduct: ")
    //TODO: check if product not exists
    const currentList = this.state.list.copyWithin()
    if (!this.isProductExists(product)){
      product.quantity = 1
      currentList.push(product)
      this.setState({list: currentList})
    }
  }

  removeProduct=(index)=>{
    console.log("removeProduct: " + index)
    const currentList = this.state.list.copyWithin()
    currentList.splice(index, 1)
    this.setState({list: currentList})
  }

  updateItemQuantity=(index, quantity)=>{
    console.log("updateItemQuantity: " + index + " " + quantity)
    const currentList = this.state.list
    currentList[index].quantity = quantity
    this.setState({list: currentList})
  }

  isProductExists=(product)=>{
    let isExists = false
    this.state.list.forEach((item)=> {
      if (product.rawProductName === item.rawProductName){
        //if product already exists, do not add to the list
        console.log("if product already exists, do not add to the list")
        isExists = true;
        return;
      }
    })

    return isExists;
  }

  getTotalCartPrice=()=>{
    let amount = 0
    this.state.list.forEach((item)=> {
      amount += item.quantity * item.rawProductPrice
    })
    return amount
  }

  render() {
    return (
      <ShoppingCartContext.Provider
        value={{
          ...this.state,
          addProduct: this.addProduct,
          removeProduct: this.removeProduct,
          updateItemQuantity: this.updateItemQuantity,
          isProductExists: this.isProductExists,
          getTotalCartPrice: this.getTotalCartPrice
        }}>
        {this.props.children}
      </ShoppingCartContext.Provider>
    );
  }
}

export default ShoppingCartContextProvider;
