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
    newList = this.state.list.copyWithin;
    //TODO: check if product not exists
    newList.push(product)
    this.setState({list: newList})
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
