import React, {createContext, Component} from 'react';

export const ShoppingCartContext = createContext();

class ShoppingCartContextProvider extends Component {
  state = {
    list: [],
  };

  updateList=(list)=> {
    console.log("updateList: ")
    this.setState({list: [...this.state.list, ...list]})
  }

  addProduct=(product)=>{
    console.log("addProduct: " + product)
    //TODO: check if product not exists
    this.setState({list: [...this.state.list, product]})
    console.log("updateList: " + JSON.stringify(this.state.list))

  }

  removeProduct=()=>{
    //TODO: 
  }

  changeQuantity(itemIndex, quantity){
    this.state.list[itemIndex].quantity = quantity
    this.setState()
  }

  render() {
    return (
      <ShoppingCartContext.Provider
        value={{
          ...this.state,
          addProduct: this.addProduct,
          updateList: this.updateList 
        }}>
        {this.props.children}
      </ShoppingCartContext.Provider>
    );
  }
}

export default ShoppingCartContextProvider;
